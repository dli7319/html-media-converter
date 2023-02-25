import React, { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import FileInput from './FileInput';
import RenderOutput, { OutputOptions, containerToMime, defaultOutputOptions } from './RenderOutput';
import Log from './Log';
import styles from './styles/MediaConverter.module.css';

export default function MediaConverter() {

    const [log, setLog] = useState('');
    const [outputVideoSrc, setOutputVideoSrc] = useState('');
    const [outputOptions, setOutputOptions] = useState<OutputOptions>(defaultOutputOptions);
    const [progress, setProgress] = useState(-1);
    const ffmpeg = useState(() => ({
        current: createFFmpeg({
            log: false,
            progress: (p) => {
                setProgress(100 * p.ratio);
            }
        })
    }))[0];
    const [selectedFile, setSelectedFile] = useState<null | File>(null);

    ffmpeg.current.setLogger(({ type, message }) => {
        setLog((prev) => prev + "\n" + message);
    });

    function resetFFmpeg() {
        ffmpeg.current = createFFmpeg({
            log: true,
            logger: (p) => {
                console.log("Logger", p);
            },
            progress: (p) => {
                console.log("Progress", p);
                setProgress(100 * p.ratio);
            }
        });
    }

    async function transcode(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.item(0);
        if (file) {
            setSelectedFile(file);
        }
    }

    async function beginRender() {
        if (selectedFile) {
            setLog('');
            const file = selectedFile;
            await ffmpeg.current.load();
            const updatedOutputOptions = { ...outputOptions };
            if (!updatedOutputOptions.container) {
                updatedOutputOptions.container = file.name.split('.').pop();
            }
            if (!updatedOutputOptions.container) {
                console.warn('No container selected');
                return;
            }
            ffmpeg.current.FS('writeFile', file.name, await fetchFile(file));
            const outputFilename = `output.${updatedOutputOptions.container}`;
            const filters = [];
            if (outputOptions.container == "gif" && outputOptions.hqGif) {
                filters.push('split=2[v1][v2];[v1]palettegen=stats_mode=full[palette];[v2][palette]paletteuse=dither=sierra2_4a');
            }
            let ffmpegCall = [
                '-i', file.name,
                (updatedOutputOptions.framerate ? ['-r', updatedOutputOptions.framerate.toString()] : []),
                (updatedOutputOptions.pixelFormat ? ['-pix_fmt', updatedOutputOptions.pixelFormat] : []),
                (filters.length > 0 ? ['-filter_complex', '[0]' + filters.join(';')] : []),
                outputFilename
            ].flat();
            const outputMime = containerToMime[updatedOutputOptions.container] as string;
            await ffmpeg.current.run(...ffmpegCall);
            const data = ffmpeg.current.FS('readFile', outputFilename);
            const url = URL.createObjectURL(new Blob([data.buffer], { type: outputMime }));
            setOutputVideoSrc(url);
            setOutputOptions(updatedOutputOptions);
            resetFFmpeg();
        } else {
            console.warn('No file selected');
        }
    }

    const componentClasses = `text-center ${styles.components}`;
    return <div className={`text-center d-flex flex-wrap ${styles.mainContainer}`}>
        <FileInput className={componentClasses} onChange={transcode} file={selectedFile} />
        <RenderOutput className={componentClasses} log={log}
            outputOptions={outputOptions} setOutputOptions={setOutputOptions}
            outputVideoSrc={outputVideoSrc}
            progress={progress}
            onStartRenderClicked={
                selectedFile ? beginRender : undefined} />
        <Log className={componentClasses} log={log} />
    </div>;
}