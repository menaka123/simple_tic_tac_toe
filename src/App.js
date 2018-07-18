import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : 'Welcome to TIC-TAC-TOE',
            PLAYER_ONE : 'X',
            PLAYER_TWO : 'O',
            currentTurn : 'X',
            board : new Array(9).fill(''),
            winningCombo : [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 8], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
            totalMoves: 0,
            gameEnded: false,
            winner: 'Player One : X'
        }

    }


    clickOP(index) {



        if(this.state.board[index] === "" && this.state.gameEnded === false){

            this.state.board[index] = this.state.currentTurn;
            this.setState({
                board: this.state.board,
                currentTurn: this.state.currentTurn === this.state.PLAYER_ONE ? this.state.PLAYER_TWO : this.state.PLAYER_ONE,
                totalMoves: this.state.totalMoves++,
                winner: 'Player One : '+ (this.state.currentTurn === this.state.PLAYER_ONE ? this.state.PLAYER_TWO : this.state.PLAYER_ONE)
            });

            let result = this.checkWinner();


            if (result === 'X') {

                this.setState({
                    gameEnded: true,
                    winner: 'Player One Won the game!!'
                });

                console.log('dd');

            } else if(result === 'O') {
                this.setState({
                    gameEnded: true,
                    winner: 'Player two Won the game!!'
                });

                console.log('dd');
            } else if(result === 'draw') {
                this.setState({
                    gameEnded: true,
                    winner: 'It\'s a Draw!!'
                });

                console.log('dd');
            }



        }

    }

    checkWinner() {

        let winnings = this.state.winningCombo;
        let board = this.state.board;

        for (let i = 0; i < winnings.length; i++) {

            if(board[winnings[i][0]] === board[winnings[i][1]] && board[winnings[i][1]] === board[winnings[i][2]]) {
                return board[winnings[i][0]];
            }
        }

        if(this.state.totalMoves === 9) {
            return 'draw';
        }
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.setState({message: this.state.message + '!'})} className="App-title">{this.state.message}</h1>
        </header>

          <div id="status">{this.state.winner}</div>
          <div className="board">
              {this.state.board.map((cell, index) => {
                  return <div onClick={() => {this.clickOP(index)}} data-cell-id={index} className="square">{cell}</div>;
              })}
          </div>


      </div>


    );
  }
}

export default App;
