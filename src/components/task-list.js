import React from 'react';
import { connect } from 'react-redux';
import ListOfTasks from './style/list-of-tasks';


class TaskList extends React.Component {

    editTask(event){
        event.preventDefault();

        let taskTitle = event.target.parentElement.textContent
                                    .replace(event.target.innerText, '');

        let collection = this.props.currObject;
        
        if(taskTitle && collection){
            let obj = null;

            collection.tasks.map(i => {
                if(i.title === taskTitle) obj = i;
            })

            let title = prompt('Enter task title', obj.title) || obj;

            this.props.onEditTask(obj, title);
        }
    }

    onChecked(event){
        event.stopPropagation();

        event.preventDefault();

        let taskTitle = event.target.parentElement.textContent
                                    .replace('Edit', '');

        let collection = this.props.currObject;
        
        if(taskTitle && collection){
            let obj = null;
            collection.tasks.map(i => {
                if(i.title === taskTitle) obj = i;
            })

            this.props.onDoneTask(obj, event.target.checked)
        }
    }

	showTasks(){
		if(this.props.currTasks){
            let tasksArray = this.props.currTasks.filter(task => 
                            task.title.includes(this.props.searchTasks));

            if(this.props.searchDone){
                tasksArray = tasksArray.filter(task => task.done);
            }

			return tasksArray.map((tasks, index) => 
		        <li key={index}> 
                    <input type="checkbox" onClick={this.onChecked.bind(this)} />
                    {tasks.title} 
                    <button onClick={this.editTask.bind(this)}>Edit</button>
                </li>)
		} else return null;
	}

    render() {
        return (
        	<div>
        	    <ListOfTasks>
            		{this.showTasks()}
            	</ListOfTasks>
            </div>
        )
    }
}

export default connect(
        state => ({
            currTasks: state.tasks.tasks,
            searchTasks: state.search[0],
            searchDone: state.search[1],
            currObject: state.tasks
        }),
        dispatch => ({
            onEditTask: (task, newName) => {
                dispatch({type: 'EDIT_CURRENT_TASKS', payload: {task, newName}});},

            onDoneTask: (task, done) => {
                dispatch({type: 'DONE_TASKS', payload: {task, done}});}
        })
)(TaskList);

