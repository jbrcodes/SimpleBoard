/* Square.js */

import { Player } from './Player.js';



export class Square {

    // ------------------------------------------------------------------------
    // Class Methods
    // ------------------------------------------------------------------------

    static GetPlayerLocation() {
        // (This is not ideal; Square needs to know about Player implementation)
        var tdId = $('#player').parent().attr('id');
        var r = Number( tdId[3] );  // row is 4th character of ID
        var c = Number( tdId[5] );

        return { row: r, col: c };
    }

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(id) {
        this.id = id;  // same as <td> ID in view
        this._player = null;
        this.visited = false;
        this.visitNum = 0;
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
        $('#'+this.id).children()[0].remove();  // remove child from <td>
        $('#'+this.id)
            .addClass('visited')
            .text(this.visitNum);

        return p;
    }

}