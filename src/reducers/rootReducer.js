import { combineReducers } from 'redux';

import categories from './categories';
import tasks from './tasks';
import search from './search';

export default combineReducers({
	categories,
	tasks,
    search
});
