import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return(
            <div class="ui segment">
                <p></p>
                <div class="ui active dimmer">
                    <div class="ui loader"></div>
                </div>
            </div>
        );
    }
}

export default Loader;