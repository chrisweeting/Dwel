import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.session.id,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Greeting);