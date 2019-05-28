import React from "react";
import { connect } from "react-redux";
import { prevAction, nextAction } from "../actions/actions";
import Button from "./Button";

class ActionsControls extends React.Component {
  constructor(props) {
    super(props);
    this.prevAction = this.prevAction.bind(this);
    this.nextAction = this.nextAction.bind(this);
  }

  prevAction() {
    this.props.prevAction();
  }

  nextAction() {
    this.props.nextAction();
  }

  render() {
    return (
      <div className="flex-container">
        <Button
          styleName={this.props.past.length > 0 ? " " : "not-displayable"}
          handleAction={this.prevAction}
          text={"Previous Action"}
        />
        <Button
          styleName={this.props.future.length > 0 ? " " : "not-displayable"}
          handleAction={this.nextAction}
          text={"Next Action"}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { future: state.future, past: state.past, present: state.present };
};

const mapDispatchToProps = {
  prevAction,
  nextAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsControls);
