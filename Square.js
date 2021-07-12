/* Square.js */



class Square {

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

    get player() {
        return this._player;
    }

    set player(p) {
        // Model
        if (p) {
            p.incrVisitCount();
        } else {
            this.visited = true;
            this.visitNum = this._player.visitCount;
        }
        this._player = p;

        // View
        if (p) {
            $('#'+this.id).append(p.elem);  // append the player's view to the square's view
        } else {
            $('#'+this.id)
                .empty()  // remove the player view
                .addClass('visited')
                .text(this.visitNum);
        }
    }

}

export default Square;