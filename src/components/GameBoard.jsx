import React from "react";
import Cell from "./Cell";
import { connect } from "react-redux";
import { changeTurn, playerWin } from "../actions/actions";
import { EMPTY, DRAW, X_SIGN, O_SIGN } from "../constants";
import Message from "./Message";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.createCells = this.createCells.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
  }

  componentDidUpdate() {
    let winner = this.checkWinner(this.props.values);
    if (winner !== null) {
      this.props.playerWin(winner);
      switch (winner) {
        case X_SIGN:
          this.displayMessage("Player One Wins");
          break;
        case O_SIGN:
          this.displayMessage("Player Two Wins");
          break;
        case DRAW:
          this.displayMessage("Draw");
          break;
        default:
          break;
      }
    }
  }

  displayMessage(message) {
    console.log(message);
  }

  createCells() {
    let cells = [];
    for (let i = 0; i < this.props.values.length; i++) {
      cells.push(
        <Cell
          index={i}
          key={i.toString()}
          handleClick={this.handleClick}
          value={this.props.values[i]}
        />
      );
    }
    return cells;
  }

  checkWinner(cells) {
    let winner = null;
    var combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
    combinations.forEach(combination => {
      let cellsOnPosition = combination.map(function(index) {
        return cells[index];
      });
      if (
        cellsOnPosition[0] !== EMPTY &&
        cellsOnPosition.every(v => v === cellsOnPosition[0])
      ) {
        winner = cellsOnPosition[0];
      }
    });
    if (winner === null && !cells.includes(EMPTY)) {
      winner = DRAW;
    }
    return winner;
  }

  handleClick(index) {
    this.props.changeTurn(this.props.turn, index);
  }

  render() {
    return (
      <div className="game-board">
        <Message styleName={""} text={""} />
        {this.createCells()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.present.values,
    turn: state.present.turn
  };
};

const mapDispatchToProps = {
  changeTurn,
  playerWin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
