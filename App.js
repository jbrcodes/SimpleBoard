/* App.js */

import { Board } from './Board.js';
import { Player } from './Player.js';



 export class App {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(divId, boardSize) {
        // Declare properties
        this.board = null;  // JS obj
        this.elem = null;  // app <div>

        // Do stuff
        this._initBoard(divId, boardSize);
        this._initPlayer();
        this._runAnimation();
    }

    _initBoard(divId, boardSize) {
        // Create board obj
        this.board = new Board(boardSize);

        // Create app <div> and append board element
        this.elem = $('<div>')
            .attr('id', 'simple-board-app')
            .append(this.board.elem);
        
        // Finally, append app <div> to caller's <div>
        // (Only modify DOM once; see NOTES for explanation.)
        $('#'+divId).append(this.elem);
    }

    _initPlayer() {
        var p = new Player('Julio');
        let sq = this.board.getRandomSquare();
        sq.setPlayer(p);  // this is the first visited square
    }

    async _runAnimation() {
        let visitCount = 1;
        const visitLimit = 5;

        while (visitCount < visitLimit) {
            await this._pause(1000);  // wait a moment...
            this._movePlayer();
            visitCount++;
        }
    }

    _movePlayer() {
        // Remove player from current square
        let sq = this.board.getSquareWithPlayer();
        let p = sq.removePlayer();  // sets sq to 'visited'

        // Find an unvisited square
        while (sq.visited) {
            sq = this.board.getRandomSquare();
        }

        // Add player to the square
        sq.setPlayer(p);
    }

    async _pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}