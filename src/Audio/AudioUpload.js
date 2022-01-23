import React from 'react'

function AudioUpload(props) {

    const handleUpload = () => {
        let audioInput = document.getElementsByClassName('audio-upload')[0]
        audioInput.click()
    }

    return (<div className='upload-button-container'>
        <button className='upload-button' onClick={handleUpload}>
            {props.buttonText}
        </button>
        <input type='file' className='audio-upload' accept='audio/*' onChange={props.onUpload} />
    </div>)
}

export default AudioUpload