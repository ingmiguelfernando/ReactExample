import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit( console.log(this.state.term));
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}>
                        </input>
                    </div>
                </form>
            </div>
        );
    }

};

export default SearchBar;