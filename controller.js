
var matcherController = {
	model: matcherModel,
	view: matcherView,

	init: function(size) {
		this.model.init(size);
		console.log('koz', this.model.cards.length);
		this.view.init();
	},
};

