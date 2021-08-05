import React, { Component } from 'react';

class VideoDetail extends Component {
    render() {
        console.log("this.props==>>", this.props);
        return(
            <div>
                <iframe 
                    width="700" 
                    height="450" 
                    src={`https://www.youtube.com/embed/${this.props.video}`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">   
                </iframe>
            </div>
        );
    }
}

export default VideoDetail;