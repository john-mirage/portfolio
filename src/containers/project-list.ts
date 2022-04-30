import { connect } from 'react-redux'
import {ActionCreator, bindActionCreators} from 'redux'
import * as ProjectActions from '@actions/projects';
import ProjectList from '@components/project-list';
import { getVisibleProjects } from '@selectors/projects';

const mapStateToProps = state => ({
  filteredProjects: getVisibleProjects(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions as ActionCreator<unknown>, dispatch)
});

const VisibleProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);

export default VisibleProjectList;