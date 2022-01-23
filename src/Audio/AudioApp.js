import React from 'react'
import AudioUpload from './AudioUpload'
import './AudioApp.css'

class AudioApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fileUploaded: false,
            uploadButtonText: 'Upload Audio'
        }
    }

    updateFile(newFile) {
        if (typeof newFile !== 'undefined') {    
            this.setState({
                audioFile: newFile,
                fileUploaded: true,
                uploadButtonText: 'Upload Different Audio'
            })
        } 
    }

    render() {
        return (
            <div className='audio-app'>
                {this.state.fileUploaded ? <audio controls src={URL.createObjectURL(this.state.audioFile)} /> : <></>}
                <AudioUpload 
                    onUpload={(uploadEvent) => this.updateFile(uploadEvent.target.files[0])} 
                    buttonText={this.state.uploadButtonText}
                />
            </div>
        )
    }
}

export default AudioApp