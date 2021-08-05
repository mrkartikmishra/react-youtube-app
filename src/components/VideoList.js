import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    onSelectVideo = (video) => {
        console.log("hello", video);
        this.props.onSelectVideo(video);
    }

    render() {
        const { videos } = this.props;
        
        return (
            videos.map((video) => {
                return (
                    <div 
                        className="ui relaxed list" 
                        key={video.id.videoId}>
                            <VideoItem onSelectVideo={() => this.onSelectVideo(video.id.videoId)} video={video} />
                    </div>
                );
            })
        )
    }
}

export default VideoList;