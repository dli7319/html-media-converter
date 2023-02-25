import React, { useMemo, useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';

import styles from './styles/FileInput.module.css';

export interface InputOptions {
    file?: File;
    ss?: string;
    to?: string;
}

export const defaultInputOptions: InputOptions = Object.freeze({});

function parseTime(time: string): number {
    const splitTime = time.split(':').map(parseFloat);
    if (splitTime.length == 1) {
        return splitTime[0];
    } else if (splitTime.length == 2) {
        const [minutes, seconds] = splitTime;
        return minutes * 60 + seconds;
    } else if (splitTime.length == 3) {
        const [hours, minutes, seconds] = splitTime;
        return hours * 3600 + minutes * 60 + seconds;
    } else {
        throw new Error(`Invalid time format: ${time}`);
    }
}

export default function FileInput({
    inputOptions,
    setInputOptions,
    className = ''
}: {
    inputOptions: InputOptions,
    setInputOptions: (inputOptions: InputOptions) => void,
    className?: string
}) {
    const [videoDuration, setVideoDuration] = useState(1);
    const videoPreviewRef = useRef(null);
    function videoLoadedMetadata(e: React.SyntheticEvent<HTMLVideoElement, Event>) {
        const video = e.currentTarget;
        const videoDuration = video.duration;
        setVideoDuration(videoDuration);
    }
    function onSsChecked(e: React.ChangeEvent<HTMLInputElement>) {
        const newInputOptions = { ...inputOptions };
        if (e.target.checked) {
            newInputOptions.ss = newInputOptions.ss || "0";
        } else {
            delete newInputOptions.ss;
        }
        setInputOptions(newInputOptions);
    }
    function onSSChange(e: React.ChangeEvent<HTMLInputElement>) {
        const ss = e.target.value;
        const newInputOptions = { ...inputOptions, ss };
        if (typeof inputOptions.to === 'string') {
            const ss = parseTime(newInputOptions.ss);
            const to = parseTime(inputOptions.to);
            if (ss >= to) {
                newInputOptions.to = newInputOptions.ss;
            }
        }
        if (videoPreviewRef.current) {
            const video = videoPreviewRef.current as HTMLVideoElement;
            video.currentTime = parseTime(ss);
        }
        setInputOptions(newInputOptions);
    }
    function onToChecked(e: React.ChangeEvent<HTMLInputElement>) {
        const newInputOptions = { ...inputOptions };
        if (e.target.checked) {
            newInputOptions.to = newInputOptions.to || "100";
        } else {
            delete newInputOptions.to;
        }
        setInputOptions(newInputOptions);
    }
    function onToChange(e: React.ChangeEvent<HTMLInputElement>) {
        const to = e.target.value;
        const newInputOptions = { ...inputOptions, to };
        if (typeof inputOptions.ss === 'string') {
            const ss = parseTime(inputOptions.ss);
            const to = parseTime(newInputOptions.to);
            if (ss >= to) {
                newInputOptions.ss = newInputOptions.to;
            }
        }
        if (videoPreviewRef.current) {
            const video = videoPreviewRef.current as HTMLVideoElement;
            video.currentTime = parseTime(to);
        }
        setInputOptions(newInputOptions);
    }
    const { file } = inputOptions;
    const fileIsVideo = file && file.type.startsWith('video/');
    const fileIsImage = file && file.type.startsWith('image/');
    const fileUrl = useMemo(() => file && URL.createObjectURL(file), [file]) || "";
    const ssValue = typeof inputOptions.ss === 'string' ? parseTime(inputOptions.ss) : 0;
    const ssSelector = <Form className='d-flex'>
        <Form.Switch
            label="ss"
            checked={typeof inputOptions.ss === 'string'}
            onChange={onSsChecked}
        />
        <Form.Range className='mx-1' value={ssValue}
            max={videoDuration} step={0.0001}
            onChange={onSSChange} />
        <Form.Control type="text" className='w-25'
            value={inputOptions.ss || 0}
            onChange={onSSChange} />
    </Form>;
    const toValue = typeof inputOptions.to === 'string' ? parseTime(inputOptions.to) : videoDuration;
    const toSelector = <Form className='d-flex'>
        <Form.Switch
            label="to"
            checked={typeof inputOptions.to === 'string'}
            onChange={onToChecked}
        />
        <Form.Range className='mx-1' value={toValue}
            max={videoDuration} step={0.0001}
            onChange={onToChange} />
        <Form.Control type="text" className='w-25'
            value={inputOptions.to || videoDuration}
            onChange={onToChange} />
    </Form>;
    return (
        <div className={`${className} ${styles.mainDiv}`}>
            <h2>File Input</h2>
            <input type="file" id="file" className="fileInput"
                accept='video/*,image/*,audio/*'
                onChange={(e) => {
                    const file = e.target.files?.item(0);
                    if (file) {
                        setInputOptions({ ...inputOptions, file });
                    }
                }} />
            <div>
                {/* Preview */}
                {fileIsVideo && <video src={fileUrl} ref={videoPreviewRef}
                    controls
                    className={styles.previewImageVideo}
                    onLoadedMetadata={videoLoadedMetadata} />}
                {fileIsImage && <img src={fileUrl} className={styles.previewImageVideo} />}
            </div>
            <div>
                {/* Input options */}
                {ssSelector}
                {toSelector}
            </div>
        </div>);
}