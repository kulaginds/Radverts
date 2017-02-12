/*
	Application component: Button
*/

Radverts.Views.Button = Backbone.View.extend({
	
	tagName:'button',

	className:'btn btn-primary',

	initialize:function(options) {
		this.type  = options.type || 'button';
		this.title = options.title || 'my button';

		this.render();
	},

	render:function() {
		this.$el.attr('type', this.type);
		this.$el.html(this.options.title);
	}

});