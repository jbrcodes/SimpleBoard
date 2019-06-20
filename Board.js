/* Board.js */

import { Square } from './Square.js';



export class Board {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(size) {
        this.size = size;

        this.model = this._createModel();
        this.elem = this._createView();
    }

    _createModel() {
        var model = [];  // model[2][3] is row 3, column 4 (since first row is 0)

        for (let r=0; r<this.size; r++) {
            model.push( [] );  // start a new row
            for ( let c=0; c<this.size; c++) {
                let sqId = `sq_${r}-${c}`;
                model[r].push( new Square(sqId) );  // push a new Square on current row
            }
        }

        return model;
    }

    _createView() {
        let tableElem = $('<table>');

        for (let r=0; r<this.size; r++) {
            let trElem = $('<tr>');

            for (let c=0; c<this.size; c++) {
                let tdId = `sq_${r}-${c}`;
                // Append a new <td> to trElem
                $('<td>')
                    .attr('id', tdId)
                    .appendTo(trElem);
            }

            $(tableElem).append(trElem);
        }

        return tableElem;
    }

    // ------------------------------------------------------------------------
    // Squares
    // ------------------------------------------------------------------------

    getRandomSquare() {
        let r = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        return this.model[r][c];
    }

    getSquareWithPlayer() {
        // Find row/col from view; easier than searching model
        var tdId = $('#player').parent().attr('id');
        var r = Number( tdId[3] );  // row is 4th character of ID
        var c = Number( tdId[5] );

        // Return the square from the model array
        return this.model[r][c];
    }

}