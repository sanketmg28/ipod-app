import React from 'react';
import "../assets/css/Playing.css"

class Playing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
        }
        this.intervalId = "";


    }

    componentDidMount() {
        const { audio } = this.props;
        this.setState({ currentTime: audio.currentTime });
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: this.props.audio.currentTime });
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { songItems, playing, songIndex, audio, songImgUrl } = this.props;
        var currentTimeRender = Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60);
        var durationRender = Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
        const percentageComplete = { width: (this.state.currentTime / audio.duration * 100) + "%" };
        if(durationRender==="NaN:NaN"){
            durationRender="0:00";
        }
        if(Math.floor(this.state.currentTime%60<10)){
            currentTimeRender = Math.floor(this.state.currentTime / 60) + ":0" + Math.floor(this.state.currentTime % 60);
        }
        return (
            <div className="now-playing-container">
                <div className="song-details">
                    <img src={songImgUrl} alt="songImg"></img>
                    <div>
                        <h6>{songItems[songIndex]}</h6>
                        {playing && <h4 className="play-pause-nav">Playing</h4>}
                        {!playing && <h4 className="play-pause-nav">Paused</h4>}
                    </div>
                </div>
                <div className="status">
                    {currentTimeRender}
                    <div id="progress">
                        <div style={percentageComplete} id="progress-bar"></div>
                    </div>
                    {durationRender}
                </div>
            </div>
        )
    }
}

export default Playing;