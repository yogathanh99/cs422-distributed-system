import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';
import './App.css';

function App({ fetchMessages, loading, messages, errorMessage }) {
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return <div className='App'>Hello</div>;
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  messages: state.messages,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = {
  fetchMessages: actions.fetchMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
