
var matcherController = {
	model: matcherModel,
	view: matcherView,
	selecting: false,

	init: function(size) {
		this.model.init(size);
		this.view.init();
	},

	selectCard: function(id){
		if( this.selecting || this.model.selectedCard.id === id ) return;
		this.selecting = true;

		if( this.model.selectedCard ) {

		} else {
			this.model.setSelectedCard(id);
			this.selecting = false;
		}
	},
};

