import React, { Component } from 'react';

import './videoItem.css'

class VideoItem extends Component {

    onSelectVideo = () => {
        this.props.onSelectVideo(this.props.video.id.videoId);
    }

    render() {
        return (
            <div className="item video-item" onClick={this.onSelectVideo}>
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <a className="header">{this.props.video.snippet.title}</a>
                </div>
            </div>
        )
    }
}

export default VideoItem;