import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  formType: 'New account',
  errors: state.errors.session
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  clear: () => dispatch(clearErrors()),
  otherForm: (
    <button onClick={() => dispatch(openModal('signin'))} >
      Sign in
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);