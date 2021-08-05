import React from 'react';

class SearchBar extends React.Component {

    state = {searchTerm: ''};

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.searchTerm);
        this.props.onSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.submitHandler}>
                    <div className="field">
                        <input 
                            type="text"
                            placeholder="Search videos here.."
                            value={this.state.searchTerm}
                            onChange={(e) => this.setState({searchTerm : e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;