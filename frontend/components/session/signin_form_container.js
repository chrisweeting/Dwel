import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  formType: 'Sign up',
  errors: state.errors.session
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SessionForm);