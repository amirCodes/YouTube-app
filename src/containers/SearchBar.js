import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
    }
    onFormSubmit(event) {
        event.preventDefault();

    }
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value })
    }
    render() {
        return (
            <div>
                <div>
                    <h2>this is a sample youTube app</h2>
                </div>
                <div>
                  <form onSubmit={this.onFormSubmit} className="input-group">
                <span>
                    <input
                      placeholder="search..."
                      value={this.state.item}
                      onChange={this.onInputChange}
                    />
                </span> &nbsp;
                    <button type="submit" className="btn btn-primary">Search</button>
                  </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;