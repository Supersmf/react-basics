import React from 'react';
import { connect } from 'react-redux';

import WrapperCategory from './style/wrapper-category';
import CategoryCreate from './category-create';


class CategoryList extends React.Component {

    addCategory(){
        let catArr = this.props.categories;
        return catArr.map((category, index) =>
            <CategoryCreate key={index} category={category} 
                            childs={category.childs}/>)
    }

    render() {
        return ( 
            <WrapperCategory>                
                {this.addCategory()}
            </WrapperCategory>

        )
    }
}
export default connect(
        state => ({
            categories: state.categories
        }),
        dispatch => ({})
)(CategoryList);
