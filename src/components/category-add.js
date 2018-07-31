import React from 'react';
import { connect } from 'react-redux';

class CategoryAdd extends React.Component {

    render() {
        // console.log(this.props.categories)

        return ( 
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Enter category title" ref="searchInput" />
                <button>Add</button>
            </form>

        )
    }

    handleCreate(event) {
        event.preventDefault();

        this.props.onAddCategory(this.refs.searchInput.value);
        this.refs.searchInput.value = '';
    }
}

export default connect(
        state => ({
            // categories: state.category
        }),
        dispatch => ({
            onAddCategory: (categoryName) => {
                dispatch({type: 'ADD_CATEGORY', payload: categoryName});
            }
        })
)(CategoryAdd);
