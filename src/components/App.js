import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import axios from '../axiosConfig';
import VideoDetail from './VideoDetail';
import Loader from './loader';


class App extends React.Component {

    state = {videos: [], selectedVideo: ''};

    componentDidMount() {
        this.onSubmitHandler('technologies');
    }

    onSubmitHandler = (searchTerm) => {
        axios.get('/search', {
            params: {
                q: searchTerm
            }
        })
        .then((videos) => {
            this.setState({videos: videos.data.items});

            this.setState({selectedVideo : videos.data.items[0].id.videoId})
        });
    }

    onSelectVideo = (videoId) => {
        this.setState({selectedVideo: videoId})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmitHandler}/>
                {this.state.videos.length === 0 ? <Loader /> : 
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default App;