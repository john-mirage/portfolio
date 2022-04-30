import { combineReducers } from 'redux';
import projects from '@reducers/projects';
import visibilityFilter from '@reducers/visibility-filter';

const rootReducer = combineReducers({
  projects,
  visibilityFilter
})

export default rootReducer;