import React, { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import FileInput, { InputOptions, defaultInputOptions } from './FileInput';
import RenderOutput, { OutputOptions, containerToMime, defaultOutputOptions } from './RenderOutput';
import Log from './Log';
import styles from './styles/MediaConverter.module.css';

function buildFFmpegCall(inputOptions: InputOptions, outputOptions: OutputOptions):
    [string[], string, string, OutputOptions] {
    const file = inputOptions.file!;
    const { ss, to } = inputOptions;
    const inputCall = [
        (ss ? ['-ss', ss] : []),
        (to ? ['-to', to] : []),
        '-i', file.name,
    ].flat();
    const container = outputOptions.container || file.name.split('.').pop();
    if (typeof container !== 'string') {
        throw new Error('No container selected');
    }
    const outputFilename = `output.${container}`;
    const newOutputOptions = {
        ...outputOptions,
        container: container
    };
    const filters = [];
    if (outputOptions.container == "gif" && outputOptions.hqGif) {
        filters.push('split=2[v1][v2];[v1]palettegen=stats_mode=full[palette];[v2][palette]paletteuse=dither=sierra2_4a');
    }
    let ffmpegCall = [
        inputCall,
        (outputOptions.framerate ? ['-r', outputOptions.framerate.toString()] : []),
        (outputOptions.pixelFormat ? ['-pix_fmt', outputOptions.pixelFormat] : []),
        (filters.length > 0 ? ['-filter_complex', '[0]' + filters.join(';')] : []),
        (outputOptions.webpLoop ? ['-loop', '0'] : []),
        outputFilename
    ].flat();
    const outputMime = containerToMime[container] as string;
    return [ffmpegCall, outputFilename, outputMime, newOutputOptions];
}

export default function MediaConverter() {

    const [log, setLog] = useState('');
    const [outputVideoSrc, setOutputVideoSrc] = useState('');
    const [inputOptions, setInputOptions] = useState<InputOptions>(defaultInputOptions);
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

    ffmpeg.current.setLogger(({ message }) => {
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

    async function beginRender() {
        const { file } = inputOptions;
        if (file) {
            setLog('');
            setOutputVideoSrc('');
            await ffmpeg.current.load();
            ffmpeg.current.FS('writeFile', file.name, await fetchFile(file));
            const [ffmpegCall, outputFilename, outputMime, newOutputOptions
            ] = buildFFmpegCall(inputOptions, outputOptions);
            await ffmpeg.current.run(...ffmpegCall);
            const data = ffmpeg.current.FS('readFile', outputFilename);
            if (data.length == 0) {
                console.warn('No data returned');
                return;
            }
            const url = URL.createObjectURL(new Blob([data.buffer], { type: outputMime }));
            setOutputVideoSrc(url);
            setOutputOptions(newOutputOptions);
            resetFFmpeg();
        } else {
            console.warn('No file selected');
        }
    }

    const componentClasses = `text-center ${styles.components}`;
    return <div className={`text-center d-flex flex-wrap ${styles.mainContainer}`}>
        <FileInput className={componentClasses}
            inputOptions={inputOptions}
            setInputOptions={setInputOptions} />
        <RenderOutput className={componentClasses}
            outputOptions={outputOptions}
            setOutputOptions={setOutputOptions}
            outputVideoSrc={outputVideoSrc}
            progress={progress}
            onStartRenderClicked={
                inputOptions.file ? beginRender : undefined} />
        <Log className={componentClasses} log={log} />
    </div>;
}