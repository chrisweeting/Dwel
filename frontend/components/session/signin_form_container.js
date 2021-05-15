import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  formType: 'Sign in',
  errors: state.errors.session
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  clear: () => dispatch(clearErrors()),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))} className="lit">
      New account
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);