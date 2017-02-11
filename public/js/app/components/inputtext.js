/*
	Application component: InputText
*/

Radverts.Views.InputText = Backbone.View.extend({

	tagName:'input',

	className:'form-control',

	initialize:function(options) {
		this.name        = options.name;
		this.value       = options.value || '';
		this.placeholder = options.placeholder || '';
		
		this.render();
	},

	render:function() {
		this.$el.attr('type', 'text');
		this.$el.attr('name', this.name);
		this.$el.attr('value', this.value);
		this.$el.attr('placeholder', this.placeholder);
	}

});