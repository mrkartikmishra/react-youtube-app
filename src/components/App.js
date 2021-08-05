import React from 'react';

import VideoList from './VideoList';
import axios from '../axiosConfig';
import VideoDetail from './VideoDetail';
import Loader from './loader';
import Header from './Header';


class App extends React.Component {

    state = {videos: [], selectedVideo: '', searchterm: ''};

    componentDidMount() {
        this.onSubmitHandler('technologies');
    }

    onSubmitHandler = async (searchTerm) => {
        const response = await axios.get('/search', {
            params: {
                q: searchTerm
            }
        });
        this.setState({videos: response.data.items, selectedVideo : response.data.items[0]});
    }

    onGetSearchTerm = (term) => {
        this.setState({searchTerm: term});
        this.onSubmitHandler(term);
    }

    onSelectVideo = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <Header onGetSearchTerm={this.onGetSearchTerm}/>
                {this.state.videos.length === 0 ? <Loader /> : 
                <div className="itemCls">
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
                </div>
                }
            </div>
        );
    }
}

export default App;