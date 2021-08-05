import React, { Component } from 'react';

import './VideoDetail.css';

class VideoDetail extends Component {
    render() {
        return(
            <div className="ui card videocard">
                <div className="ui slide masked reveal image">
                    <iframe 
                        width="770" 
                        height="470" 
                        src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">   
                    </iframe>
                </div>
                <div className="content">
                    <a className="header">{this.props.video.snippet.title}</a>
                        <div className="meta">
                            <p>{this.props.video.snippet.description}</p>
                            <span className="date">Created in {new Date(this.props.video.snippet.publishedAt).getFullYear()}</span>
                        </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="thumbs up icon"></i>
                        4k likes
                    </a>
                </div>
            </div>
        );
    }
}

export default VideoDetail;