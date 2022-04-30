import {SHOW_ALL} from "@constants/project-filters";
import {SET_VISIBILITY_FILTER} from "@constants/action-types";

export default function projects(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}