/* Board.js */

import Square from './Square.js';



class Board {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(size) {
        this.size = size;
        this.position = { row: -1, col: -1 };  // player's position (row/col)

        this.model = this._createModel();  // a 2-dim array of Square objs
        this.elem = this._createView();  // a <table> elem
    }

    _createModel() {
        var model = [];  // model[2][3] is row 3, column 4 (since first row is 0)

        for (let r=0; r<this.size; r++) {
            model.push( [] );  // start a new row
            for ( let c=0; c<this.size; c++) {
                model[r].push( new Square(r, c) );  // push a new Square on current row
            }
        }

        return model;
    }

    _createView() {
        let tableElem = $('<table>');

        for (let r=0; r<this.size; r++) {
            let trElem = $('<tr>');

            for (let c=0; c<this.size; c++) {
                let sq = this.getSquare(r, c);
                $(trElem).append(sq.elem);  // append the square's view (a <td> elem)
            }

            $(tableElem).append(trElem);  // append the <tr> to <table>
        }

        return tableElem;
    }

    // ------------------------------------------------------------------------
    // Squares
    // ------------------------------------------------------------------------

    getSquare(row, col) {
        return this.model[row][col];
    }

    _getRandomPosition() {
        let r = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        return { row: r, col: c };
    }

    // ------------------------------------------------------------------------
    // Player
    // ------------------------------------------------------------------------

    addPlayer(p) {
        // The board's empty; all squares are available
        let pos = this._getRandomPosition();
        let sq = this.getSquare(pos.row, pos.col);
        sq.player = p;
        this.position = pos;
    }

    movePlayer() {
        // Remove player from current square
        let sq = this.getSquare(this.position.row, this.position.col);
        let p = sq.player;
        sq.player = null;  // sets sq to 'visited'

        // Find an unvisited square
        let pos = this._getRandomPosition();
        sq = this.getSquare(pos.row, pos.col);
        while (sq.visited) {
            pos = this._getRandomPosition();
            sq = this.getSquare(pos.row, pos.col);
        }

        // Add player to the square and update position
        sq.player = p;
        this.position = pos;
    }

}

export default Board;