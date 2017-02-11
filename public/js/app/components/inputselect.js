/*
	Application component: InputSelect
*/

Radverts.Models.Option = Backbone.Model.extend({

	defaults: {
		title:'test',
		value:'test'
	}

});

Radverts.Collections.Options = Backbone.Collection.extend({

	model:Radverts.Models.Option

});

Radverts.Views.InputSelect = Backbone.View.extend({

	tagName:'select',

	className:'form-control',

	template:template('option_template'),

	initialize:function(options) {
		this.name    = options.name;
		this.options = options.options;
		
		this.render();
	},

	render:function() {
		this.$el.attr('type', 'text');
		this.$el.attr('name', this.name);
		this.options.each(this.addOne, this);
	},

	addOne:function(model) {
		this.$el.append(this.template(model.attributes));
	}

});