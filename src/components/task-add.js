import React from 'react';
import { connect } from 'react-redux';

class TaskAdd extends React.Component {

    render() {
        return ( 
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Text input with button" ref="searchInput" />
                <button>Add</button>
            </form>

        )
    }

    handleCreate(event) {
        event.preventDefault();

        this.props.onAddTask(this.refs.searchInput.value);
        this.refs.searchInput.value = '';
    }
}

export default connect(
        state => ({}),
        
        dispatch => ({
            onAddTask: (taskName) => {
                dispatch({type: 'ADD_TASK', payload: taskName});}
        })
)(TaskAdd);
