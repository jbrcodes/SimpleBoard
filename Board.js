/* Board.js */

//import { Player } from './Player.js';
//import { Square } from './Square.js';



export class Board {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(size) {
        this.size = size;


        this.model = this._createModel();
        console.table(this.model);

        this.elem = this._createView();
    }

    _createModel() {
        var model = [];

        for (let r=1; r<=this.size; r++) {
            model.push( [] );
            for ( let c=1; c<=this.size; c++) {
                model[r-1].push( `${r}-${c}`);  // FIX ME
            }
        }

        return model;
    }

    _createView() {
        let tableElem = $('<table>');

        for (let r=1; r<=this.size; r++) {
            let trElem = $('<tr>');

            for (let c=1; c<=this.size; c++) {
                let tdId = `sq_${r}-${c}`;
                let tdElem = $('<td>')
                    .attr('id', tdId)
                    .text(tdId)  // DEBUG
                    .appendTo(trElem);
            }

            tableElem.append(trElem);
        }

        return tableElem;
    }

    /*
    _newGame() {
        var firstTime = (this.elem === null);
        this._createTable(firstTime);
        this._setRandomBlocked();
        this._setRandomCashes();

        if (firstTime) { 
            // Use 'keydown' because Chrome and Safari don't generate 'keypress'
            $(document).on('keydown', Board.prototype.onKeydownEvent.bind(this));
        }
    
        var sq = this._getRandomEmptySquare();
        sq.player = new Player(this.playerName, 0);
    }

    _createTable(firstTime) {
        // Create the <tbody> elem and append rows/cols
        var tbody = $('<tbody>');
        for (let r=0; r<this.size; r++) {
            var tr = $('<tr>');
            for (let c=0; c<this.size; c++) {
                let id = 'sq-'+(r+1)+'-'+(c+1);
                let lbl = (r+1)+','+(c+1);
                $('<td>')
                    .attr('id', id)
                    //.html(lbl)  // DEBUG
                    .appendTo(tr);
            }
            $(tbody).append(tr);
        }
    
        if (firstTime) {
            // Create <table> and append <tbody> to it
            this.elem = $('<table>')
                .addClass('pac-board')
                .append(tbody);
        } else {
            // Simply replace existing <tbody>
            $('tbody', this.elem).replaceWith(tbody);
        }
    }

    _setRandomBlocked() {
        var count = this.size;
        while (count > 0) {
            let sq = this._getRandomSquare();
            if ( !sq.blocked ) {
                sq.blocked = true;
                count--;
            }
        }
    }

    _setRandomCashes() {
        var values = [ 20, 40, 60, 80, 100 ];
        while (values.length > 0) {
            let sq = this._getRandomSquare();
            if ( !sq.blocked && sq.cash === 0 ) {
                sq.cash = values.pop();
            }
        }
    }

    // ------------------------------------------------------------------------
    // Event Handlers
    // ------------------------------------------------------------------------

    onKeydownEvent(e) {
        var deltaRow = 0, deltaCol = 0;
        var isArrow = true;
        switch (e.key) {
            case 'ArrowUp':
                deltaRow--;
                break;
            case 'ArrowRight':
                deltaCol++;
                break;
            case 'ArrowDown':
                deltaRow++;
                break;
            case 'ArrowLeft':
                deltaCol--;
                break;
            default:
                isArrow = false;
                break;
        }
    
        if (isArrow) {
            // Do a relative move; check for valid move and square availability
            this.relMovePlayer(deltaRow, deltaCol);
        }
    }

    onNewGame() {
        this._newGame();
    }

    // ------------------------------------------------------------------------
    // Other Methods
    // ------------------------------------------------------------------------

    _getRandomSquare() {
        let r = Math.floor((Math.random() * this.size) + 1);
        let c = Math.floor((Math.random() * this.size) + 1);

        return new Square(this, 'sq-'+r+'-'+c);
    }

    getPlayerSquare() {
        var tdId = $('.player', this._ctxt).attr('id');

        return new Square(this, tdId);
    }

    getSquare(row, col) {
        return new Square(this, 'sq-'+row+'-'+col);
    }

    squareIsAvailable(row, col) {
        if (row < 1 || row > this.size || col < 1 || col > this.size) {
            return false;
        }

        var sq = this.getSquare(row, col);

        return ( !sq.blocked );
    }

    _getRandomEmptySquare() {
        var sq = this._getRandomSquare();
        while (sq.blocked || sq.cash > 0) {
            sq = this._getRandomSquare();
        }

        return sq;
    }

    relMovePlayer(deltaRow, deltaCol) {
        var sq = this.getPlayerSquare();
        var loc = sq.location;

        var newRow = loc['row'] + deltaRow;
        var newCol = loc['col'] + deltaCol;
        if ( !this.squareIsAvailable(newRow, newCol) ) {
            return;
        }

        var player = sq.player;
        sq.player = null;

        var newsq = this.getSquare(newRow, newCol);
        if (newsq.cash > 0) {
            let val = newsq.cash;
            newsq.cash = 0;
            player.cash += val;
        }

        newsq.player = player;
    }

    */

}