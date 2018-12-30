import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return <div>StreamList</div>;
  }
}

const mapDispatchToProps = { fetchStreams };

export default connect(
  null,
  mapDispatchToProps
)(StreamList);
