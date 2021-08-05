import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    onSelectVideo = (video) => {
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
                            <VideoItem onSelectVideo={() => this.onSelectVideo(video)} video={video} />
                    </div>
                );
            })
        )
    }
}

export default VideoList;