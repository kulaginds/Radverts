/*
	Application common
*/

var Radverts = {
	Views: {},
	Models: {},
	Collections: {},
	Router: {}
};

// template helper
var template = function(template_id) {
	return _.template($('#' + template_id).html());
};