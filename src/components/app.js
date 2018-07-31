import React from 'react';
import { Route } from 'react-router-dom';
import SearchBar from './search-bar';
import CategoryAdd from './category-add';
import TaskAdd from './task-add';
import TaskList from './task-list';
import CategoryList from './category-list';


import {Wrapper, AppHeader, AppTitle, AppMain, AppNav, AppSection, AppAdd} from './style/main-style';

import { connect } from 'react-redux';

class App extends React.Component {
    render() {

        // console.log(this.props.testStore);

        return ( 

            <Wrapper>
                <AppHeader>
                    <AppTitle>
                        <h1>To-Do List</h1>
                        <Route path={`/category/:task`} component={SearchBar} />
                    </AppTitle>
                    <AppAdd>
                        <CategoryAdd />
                        <Route path={`/category/:task`} component={TaskAdd} />
                    </AppAdd>
                </AppHeader>
                <AppMain>
                    <AppNav>
                        <CategoryList />
                    </AppNav>
                    <AppSection>
                        <Route path={`/category/:task`} component={TaskList} />
                    </AppSection>
                </AppMain>
                    
                
            </Wrapper>
        )
    }
}

export default connect(
        state => ({
            testStore: state
        }),
        dispatch => ({})
)(App);

{/*<Route path={`/category/:task`} component={TaskList} />*/}
