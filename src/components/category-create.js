import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Category from './style/category-style';
import Title from './style/category-title-style';
import CategoryButton from './style/button-category';
// import CategoryDeleteButton from './style/button-delete-category';


class CategoryAdd extends React.Component {

    findObject (collection,  objParent) {
        collection.map((i) => {
            (i.name === objParent) ? this.res = i : this.findObject(i.childs, objParent);
        })
    }

    findParent (collection,  category) {
        collection.map((i, x, arr) => {
            i.childs.map( t => {
               if (t.name === category) {
                    this.parent = i;
                    (i.name === category) ? this.current = i : this.current = t;
                }else {
                    this.findParent(i.childs, category);
                }     
            })
        })
    }

    addSubcategoru(event){
        event.stopPropagation();

        let categoryParentName = event.target.parentElement.parentElement.firstChild.textContent;
        let collection = this.props.categories.categories;
        let name = prompt('Enter category name', '');

        if(categoryParentName && collection){
            this.findObject(collection, categoryParentName);
            this.props.onAddSubcategoru(name, this.res);
        }
    }

    showTasks(event){
        event.stopPropagation();

        let categoryParentName = event.target.textContent;
        let collection = this.props.categories.categories;

        if(collection && categoryParentName){
            this.findObject(collection, categoryParentName);
            this.props.onShowTasks(this.res);
        }
    }

    deleteCategoru(event){
        event.stopPropagation();

        let categoryParentName = event.target.parentElement.parentElement.firstChild.textContent;
        let collection = this.props.categories.categories;

        if(collection && categoryParentName){
            this.findParent([{childs: collection}], categoryParentName);
            this.props.onDeleteCategoru(this.current, this.parent);
        }
    }

    editCategoru(event){
        event.stopPropagation();

        let categoryParentName = event.target.parentElement.parentElement.firstChild.textContent;
        let collection = this.props.categories.categories;
        
        if(categoryParentName && collection){
            this.findObject(collection, categoryParentName);
            let title = prompt('Enter category name', this.res.name) || this.res.name;
            this.props.onEditCategory(this.res, title);
        }
    }

    addCategory(elem){
        return elem.childs.map((category, index) =>
            <Category key={index}> 
                <Title onClick={this.showTasks.bind(this)}>
                    <Link to={`/category/${category.name}`}>{category.name}</Link>
                    <CategoryButton>
                        <button onClick={this.editCategoru.bind(this)}>Edit</button>
                        <button onClick={this.addSubcategoru.bind(this)}>Add</button>
                        <button onClick={this.deleteCategoru.bind(this)}>Delete</button>
                    </CategoryButton>
                </Title>
                {this.addCategory(category)}
            </Category>)
    }

    render() {
        return(
                <div>
                    {this.addCategory({childs: [this.props.category]})}

                </div>
         )
    }
}

export default connect(
        state => ({
            categories: state
        }),
        dispatch => ({
            onAddSubcategoru: (categoryName, parent) => {
                dispatch({type: 'ADD_SUBCATEGORY', payload: categoryName, parent: parent});},

            onShowTasks: (category) => {
                dispatch({type: 'SHOW_CURRENT_TASKS', payload: category});},

            onEditCategory: (category, newName) => {
                dispatch({type: 'EDIT_CURRENT_CATEGORY', payload: {category, newName}});},

            onDeleteCategoru: (categoryName, parent) => {
                dispatch({type: 'DELETE_CATEGORY', payload: categoryName, parent: parent});},
        })
)(CategoryAdd);
