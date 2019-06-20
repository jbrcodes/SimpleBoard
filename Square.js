/* Square.js */

import { Player } from './Player.js';



export class Square {

    constructor(board, id) {
        this._ctxt = board.elem;
        this.id = id;
    }

    // ------------------------------------------------------------------------
    // Getters/Setters
    // ------------------------------------------------------------------------

    get blocked() {
        return $('#'+this.id, this._ctxt).hasClass('blocked');
    }

    set blocked(bool) {
        var td = $('#'+this.id, this._ctxt);
        if (bool) {
            $(td).addClass('blocked');
        } else {
            $(td).removeClass('blocked');  // never happens
        }
    }

    get cash() {
        return Number( $('#'+this.id, this._ctxt).html() );
    }

    set cash(val) {
        var td = $('#'+this.id, this._ctxt);

        if (val) {
            $(td)
                .addClass('cash')
                .html(val);
        } else {
            $(td)
                .removeClass('cash')
                .html('');
        }
    }

    get location() {
        var toks = /sq-(\d+)-(\d+)/.exec(this.id);
        var loc = { row: Number(toks[1]), col: Number(toks[2]) };

        return loc;
    }

    get player() {
        var data = $('#'+this.id, this._ctxt).data();

        return new Player(data.playerName, data.playerCash);
    }

    set player(player) {
        var td = $('#'+this.id, this._ctxt);
        if (player) {
            $(td)
                .html( player.name+'<div class="cash">'+player.cash+'</div>' )
                .addClass('player')
                .data( { playerName: player.name, playerCash: player.cash } );
        } else {
            $(td)
                .html('')
                .removeClass('player')
                .removeData();
        }
    }

}