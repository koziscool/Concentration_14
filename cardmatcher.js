
var matcherController = {
	init: function(size) {},
};

var matcherView = {
	updateGameView: function() {},
};

$(document).ready( function(){
	$("#grid-size").focus();
	$("#grid-size-button").click( function(e){
		console.log( "here");
		e.preventDefault();
		var size = $("#grid-size").val();
		$("#grid-size-form").hide();
		matcherController.init(size);
		matcherView.updateGameView();
	});

});