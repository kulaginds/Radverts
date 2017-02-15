Radverts.Views.User = Backbone.View.extend({

	tagName:'div',

	className:'panel panel-default',

	template:JST['components/user'],

	initialize:function(options) {
		this.render();
	},

	render:function() {
		this.$el.html(this.template(this.model.attributes));
	}

});