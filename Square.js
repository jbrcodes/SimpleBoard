/* Square.js */

import { Player } from './Player.js';



export class Square {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(row, col) {
        // Model
        this.id = `sq_${row}_${col}`;
        this._player = null;
        this.visited = false;
        this.visitNum = 0;

        // View
        this.elem = this._createView();
    }

    _createView() {
        let elem = $('<td>')
            .attr('id', this.id);
        
        return elem;
    }

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------

    setPlayer(p) {
        // Model
        this._player = p;
        p.incrVisitCount();

        // View
        $('#'+this.id).append(p.elem);
    }

    removePlayer() {
        // Model
        var p = this._player;
        this._player = null;
        this.visited = true;
        this.visitNum = p.visitCount;

        // View
        $('#'+this.id+' .player').remove();
        $('#'+this.id)
            .addClass('visited')
            .text(this.visitNum);

        return p;
    }

}