import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = () => {
  return <div>Steam Edit</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  null
)(StreamEdit);
