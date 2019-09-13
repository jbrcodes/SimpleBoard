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

        // Do initialization
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
        let p = new Player('Julio');
        this.board.addPlayer(p);
    }

    async _runAnimation() {
        let visitCount = 1;
        const visitLimit = 5;

        while (visitCount < visitLimit) {
            await this._pause(500);  // wait a moment...
            this.board.movePlayer();
            visitCount++;
        }
    }

    async _pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}