import React from 'react'
//Controlled component.
class SearchBar extends React.Component {
    state = { term: '' };
    // el problema del .this se puede solucionar poniendo esta funcion en forma => o el llamado a la función.
    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
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