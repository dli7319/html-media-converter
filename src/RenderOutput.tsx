import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './styles/RenderOutput.module.css';

export interface OutputOptions {
    container?: string;
    pixelFormat?: string;
    framerate?: number;
    hqGif?: boolean;
    webpLoop?: boolean;
}

export const defaultOutputOptions: OutputOptions = Object.freeze({
    hqGif: true,
    webpLoop: true
});

export const containerToMime: any = {
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'webp': 'image/webp',
    'gif': 'image/gif'
};

const videoContainers = ['mp4', 'webm'];
const imageContainers = ['png', 'jpg', 'webp', 'gif'];
function isVideoContainer(container: string) {
    return videoContainers.includes(container);
}
function isImageContainer(container: string) {
    return imageContainers.includes(container);
}

export default function RenderOutput({
    outputOptions,
    setOutputOptions,
    outputVideoSrc,
    onStartRenderClicked = undefined,
    progress = -1,
    className = ''
}: {
    outputOptions: OutputOptions,
    setOutputOptions: (outputOptions: OutputOptions) => void,
    outputVideoSrc: string,
    onStartRenderClicked?: (() => void) | undefined,
    progress?: number,
    className?: string
}) {

    function onSelectContainer(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(`Selected container: ${e.target.value}`);
        setOutputOptions({ ...outputOptions, container: e.target.value });
    }
    function onSelectPixelformat(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(`Selected pixelformat: ${e.target.value}`);
        setOutputOptions({ ...outputOptions, pixelFormat: e.target.value });
    }
    function onSelectFrameRate(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(`Selected framerate: ${e.target.value}`);
        setOutputOptions({ ...outputOptions, framerate: parseInt(e.target.value) });
    }
    function onSetHQGIF(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(`Selected HQ GIF: ${e.target.checked}`);
        setOutputOptions({ ...outputOptions, hqGif: e.target.checked });
    }
    const hqGifSelection = outputOptions.container == 'gif' ? (
        <Form.Switch
            label="HQ GIF"
            checked={outputOptions.hqGif || false}
            onChange={onSetHQGIF}
        />
    ) : null;
    const webpLoopSelection = outputOptions.container == 'webp' ? (
        <Form.Switch
            label="Loop"
            checked={outputOptions.webpLoop || false}
            onChange={(e) => setOutputOptions({ ...outputOptions, webpLoop: e.target.checked })}
        />
    ) : null;
    return (
        <div className={`${className} ${styles.mainDiv}`}>
            <h2>Output</h2>
            <div className="d-flex flex-row">
                <FloatingLabel controlId="floatingSelect" label="Container"
                    className={styles.floatingLabel}>
                    <Form.Select className={styles.dropdownSelect}
                        aria-label="Container" onChange={onSelectContainer}>
                        <option value="" selected>Default</option>
                        {videoContainers.map((x) => <option key={x} value={x}>{x}</option>)}
                        {imageContainers.map((x) => <option key={x} value={x}>{x}</option>)}
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Pixel Format"
                    className={styles.floatingLabel}>
                    <Form.Select className={styles.dropdownSelect}
                        aria-label="PixelFormat" onChange={onSelectPixelformat}>
                        <option value="" selected>Default</option>
                        <option value="yuv420p">yuv420p</option>
                        <option value="rgb24">rgb24</option>
                        <option value="rgba">rgba</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Frame Rate"
                    className={styles.floatingLabel}>
                    <Form.Select className={styles.dropdownSelect}
                        aria-label="FrameRate" onChange={onSelectFrameRate}>
                        <option value="">Default</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div>
                {/* Extra options */}
                {hqGifSelection}
                {webpLoopSelection}
            </div>
            <Button variant="primary" onClick={onStartRenderClicked}
                hidden={onStartRenderClicked == null}>Start Render</Button>
            <ProgressBar animated={progress < 100} now={progress} hidden={progress < 0} label={`${progress.toFixed(1)}%`} />
            <div>
                <video src={outputVideoSrc} controls
                    className={styles.outputImageVideo}
                    hidden={outputVideoSrc == '' ||
                        !isVideoContainer(outputOptions.container || "")}></video>
                <img src={outputVideoSrc}
                    className={styles.outputImageVideo}
                    hidden={outputVideoSrc == '' ||
                        !isImageContainer(outputOptions.container || "")}></img>
                <small className="text-muted"
                    hidden={outputVideoSrc == ''}
                >
                    Right click and save as to download the output.
                </small>
            </div>
        </div>);
}