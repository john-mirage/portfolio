import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_TAG, SHOW_TOOL } from '@constants/project-filters';

const getVisibilityFilter = state => state.visibilityFilter;
const getProjects = state => state.projects;

export const getVisibleProjects = createSelector(
  [getVisibilityFilter, getProjects],
  (visibilityFilter, projects) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return projects;
      default:
        throw new Error('Unknown filter: ' + visibilityFilter);
    }
  }
);