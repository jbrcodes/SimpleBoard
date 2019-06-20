/* Player.js */



 export class Player {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(name) {
        this.name = name;
        this.visitCount = 0;
        this.elem = this._createView();  // <div> element
    }

    _createView() {
        var elem = $('<div>')
            .attr('id', 'player');
        
        return elem;
    }

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------

    incrVisitCount() {
        // Model
        this.visitCount++;

        // View
        $(this.elem).html(this.name + '<br>' + this.visitCount);
    }

}