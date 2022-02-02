import React, { useRef } from "react";
import "./css/drop-zone.css"

const DropZone = (props) => {

	const uploadButton = useRef(null);

	const dropHandler = (event) => {
		event.preventDefault();
		if (event.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file(s)
			for (let i = 0; i < event.dataTransfer.items.length; i++) {
				// If dropped items aren't files, reject them
				if (event.dataTransfer.items[i].kind === 'file') {
					var file = event.dataTransfer.items[i].getAsFile();
				}

			}
			props?.handleFileOnChange(file);
		}
	}

	const dragOverHandler = (event) => {
		// Prevent default behavior (Prevent file from being opened)
		event.preventDefault();
	}

	const handleFileChange = (event) => {
		props?.handleFileOnChange(event?.target?.files[0]);
	}

	const handleClick = () => {
		uploadButton.current.click();
	}

	return (
		<>
			<button
				className={props?.className}
				onDragOver={event => dragOverHandler(event)}
				onDrop={event => dropHandler(event)}
				onClick={event => handleClick(event)}>
				{props.children}
			</button>
			<input
				ref={uploadButton}
				id="file-upload"
				onChange={(event) => handleFileChange(event)}
				name="file"
				type="file"
				accept={props.accept}
			/>
		</>
	)
}

export default DropZone;