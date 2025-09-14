import React, { useRef, useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

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
    const ffmpegCall = [
        inputCall,
        (outputOptions.framerate ? ['-r', outputOptions.framerate.toString()] : []),
        (outputOptions.pixelFormat ? ['-pix_fmt', outputOptions.pixelFormat] : []),
        (filters.length > 0 ? ['-filter_complex', '[0]' + filters.join(';')] : []),
        (outputOptions.webpLoop ? ['-loop', '0'] : []),
        outputFilename
    ].flat();
    const outputMime = containerToMime[container as keyof typeof containerToMime];
    return [ffmpegCall, outputFilename, outputMime, newOutputOptions];
}

export default function MediaConverter() {

    const [log, setLog] = useState('');
    const [outputVideoSrc, setOutputVideoSrc] = useState('');
    const [inputOptions, setInputOptions] = useState<InputOptions>(defaultInputOptions);
    const [outputOptions, setOutputOptions] = useState<OutputOptions>(defaultOutputOptions);
    const [progress, setProgress] = useState(-1);
    const ffmpegRef = useRef(new FFmpeg());

    async function beginRender() {
        const { file } = inputOptions;
        if (file) {
            const ffmpeg = ffmpegRef.current;
            ffmpeg.on('log', ({ message }) => {
                setLog((prev) => prev + "\n" + message);
            });
            ffmpeg.on('progress', ({ progress }) => {
                setProgress(100 * progress);
            });
            setLog('');
            setOutputVideoSrc('');
            const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd'
            await ffmpeg.load({
                coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
            });
            await ffmpeg.writeFile(file.name, await fetchFile(file));
            const [ffmpegCall, outputFilename, outputMime, newOutputOptions
            ] = buildFFmpegCall(inputOptions, outputOptions);
            await ffmpeg.exec(ffmpegCall);
            const data = await ffmpeg.readFile(outputFilename);
            if (data.length == 0) {
                console.warn('No data returned');
                return;
            }
            let blob: Blob;
            if (typeof data === 'string') {
                blob = new Blob([data], { type: outputMime });
            } else {
                blob = new Blob([new Uint8Array(data)], { type: outputMime });
            }
            const url = URL.createObjectURL(blob);
            setOutputVideoSrc(url);
            setOutputOptions(newOutputOptions);
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
