import React, {useMemo} from 'react';

import styles from './styles/FileInput.module.css';

export default function FileInput({
    file,
    onChange,
    className = ''
}: {
    file: File | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string
}) {
    const fileIsVideo = file && file.type.startsWith('video/');
    const fileIsImage = file && file.type.startsWith('image/');
    const fileUrl = useMemo(() => file && URL.createObjectURL(file), [file]) || "";
    return (
        <div className={`${className} ${styles.mainDiv}`}>
            <h2>File Input</h2>
            <input type="file" id="file" className="fileInput" onChange={onChange} />
            <div>
                {/* Preview */}
                {fileIsVideo && <video src={fileUrl} controls className={styles.previewImageVideo} />}
                {fileIsImage && <img src={fileUrl} className={styles.previewImageVideo} />}
            </div>
        </div>);
}