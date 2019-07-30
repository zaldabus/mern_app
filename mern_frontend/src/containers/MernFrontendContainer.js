import { connect } from 'react-redux';
import MernFrontend from '../components/MernFrontend';
import * as actions from '../actions/mernFrontendActionCreators';

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(MernFrontend);