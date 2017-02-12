/*
	Application component: InputTextArea
*/

Radverts.Views.InputTextArea = Backbone.View.extend({

	tagName:'textarea',

	className:'form-control',

	initialize:function(options) {
		this.name        = options.name;
		this.value       = options.value || '';
		this.placeholder = options.placeholder || '';
		this.cols        = options.cols || 30;
		this.rows        = options.rows || 10;
		
		this.render();
	},

	render:function() {
		this.$el.attr('name', this.name);
		this.$el.attr('cols', this.cols);
		this.$el.attr('rows', this.rows);
		this.$el.html(this.value);
		this.$el.attr('placeholder', this.placeholder);
	}

});