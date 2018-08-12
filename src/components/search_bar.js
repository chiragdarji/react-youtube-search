// Export, Class, State
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: 'Starting value' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term} 
                    onChange={ event => this.setState({ term: event.target.value}) }  />

                value of the input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;
