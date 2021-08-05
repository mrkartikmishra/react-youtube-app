import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './Header.css';

import Logo from '../assets/youtube-logo.png';

class Header extends Component {

    state = {term: ''}

    onSubmitHandler = (term) => {
        this.setState({term : term});
        this.props.onGetSearchTerm(this.state.term);
    }

    render() {
        return(
            <div className="header">
                <div className="flexitem">
                    <img src={Logo} height="30" width="100"/>
                </div>
                <div className="flexitem">
                    <SearchBar onSubmit={this.onSubmitHandler}/>
                </div>
                <div className="flexitem">
                    <div className="extra content">
                        <a>
                            <i className="user icon icon-size"></i>
                        </a>
                        <a>
                            <i className="sign-in icon icon-size"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;