
var matcherView = {
	model: matcherModel,

	init: function() {
		this.$grid = $("grid-matcher");
		this.addCardsToGrid();

		width = 100.0 / this.model.size - 2;
		$(".card").css({
			width: width + "%"
		});

		$(".card").click( function(){
			matcherController.selectCard($(this).data('card-id'));
		});

	},

	addCardsToGrid: function(){
		for(var i = 0; i < this.model.cards.length; i++){
			var card = this.model.cards[i];
			console.log(i, card);
			$cardDiv= $('<div><div class="name">' + card.value + '</div></div>');
			$cardDiv.addClass('card')
			$cardDiv.attr('id', card.id);
			$cardDiv.data('card-id', card.id);
			this.$grid.append( $cardDiv );
		}
	},

	updateGameView: function() {},
};

