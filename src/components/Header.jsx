import React from "react";
import Score from "./Score";
import { connect } from "react-redux";
import { restart } from "../actions/actions";
import { P_ONE, P_TWO } from "../constants";
import Button from "./Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onNewGameBtnClick = this.onNewGameBtnClick.bind(this);
  }
  onNewGameBtnClick() {
    this.props.restart();
  }
  render() {
    return (
      <div className="flex-container">
        <Score
          className="score"
          pOneScore={this.props.pOneWins}
          pTwoScore={this.props.pTwoWins}
          pOneStyleName={this.props.turn === P_ONE ? "current-player" : ""}
          pTwoStyleName={this.props.turn === P_TWO ? "current-player" : ""}
        />
        <Button handleAction={this.onNewGameBtnClick} text={"Restart"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pOneWins: state.present.pOneWins,
    pTwoWins: state.present.pTwoWins,
    turn: state.present.turn
  };
};

const mapDispatchToProps = {
  restart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
