/* App.js */

import { Board } from './Board.js';



 export class App {

    constructor(divId, boardSize) {
        // Create board
        var board = new Board(boardSize);

        // Create app <div> and append board element
        this.elem = $('<div>')
            .attr('id', 'simple-board-app')
            .append(board.elem);
        
        // Finally, append app <div> to caller's <div>
        // (Only modify DOM once; see NOTES for explanation.)
        $('#'+divId).append(this.elem);
    }

}