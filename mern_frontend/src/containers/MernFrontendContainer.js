import { connect } from 'react-redux';
import MernFrontend from '../components/MernFrontend';
import * as actions from '../actions/mernFrontendActionCreators';

const mapStateToProps = (state) => ({
	data: state.data,
  id: state.id,
  message: state.message,
  intervalIsSet: state.intervalIsSet,
  idToDelete: state.idToDelete,
  idToUpdate: state.idToUpdate,
  objectToUpdate: state.objectToUpdate,
});

export default connect(mapStateToProps, actions)(MernFrontend);