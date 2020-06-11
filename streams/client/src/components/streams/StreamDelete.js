import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  DeleteStream() {
    this.props.deleteStream(this.props.match.params.id);    
  }
  RenderActions() {
    return (
      <div>
        <button
          onClick={() => this.DeleteStream()}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </div>
    );
  }

  RenderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream ?";
    }
    return `Are you sure you want to delete this stream with id ${this.props.stream.id}?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.RenderContent()}
        actions={this.RenderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
