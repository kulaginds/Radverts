/*
	Application component: InputText
*/

Radverts.Views.InputText = Backbone.View.extend({

	tagName:'input',

	className:'form-control',

	initialize:function(options) {
		this.name        = options.name;
		this.value       = options.value || '';
		this.type        = options.type || 'text';
		this.placeholder = options.placeholder || '';
		
		this.render();
	},

	render:function() {
		this.$el.attr('type', this.type);
		this.$el.attr('name', this.name);
		this.$el.attr('value', this.value);
		this.$el.attr('placeholder', this.placeholder);

		if (this.type == 'number') {
			this.$el.attr('step', 1);
			this.$el.attr('min', 1);
		}
	}

});