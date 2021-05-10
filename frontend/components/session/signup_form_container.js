import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  formType: 'Sign up',
  errors: state.errors.session
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SessionForm);