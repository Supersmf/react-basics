import React from 'react';
import { connect } from 'react-redux';
import Search from './style/search-bar-style';


class SearchBar extends React.Component {

    render() {
        return ( 
            <Search>
                <input type="checkbox" onClick={this.onChecked.bind(this)} />
                <form onChange={this.handleInputChange.bind(this)}>
                    <input type="text" placeholder="Search" ref="searchInput" />
                </form>
                <button onClick={this.onClear.bind(this)}>Clear</button>
            </Search>
        )
    }

    handleInputChange(event) {
        event.preventDefault();
        this.props.onSearcTasks(this.refs.searchInput.value, this.checkDone || false);
    }

    onChecked(event){
        event.stopPropagation();
        this.checkDone = event.target.checked;
    }

    onClear(){
        this.refs.searchInput.value = '';
    }
}

export default connect(
        state => ({}),
        dispatch => ({
            onSearcTasks: (task, done) => {
                dispatch({type: 'SEARCH_TASK', payload: { task, done }});}
        })
)(SearchBar);

