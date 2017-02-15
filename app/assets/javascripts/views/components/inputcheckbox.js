Radverts.Views.InputCheckbox = Backbone.View.extend({

	tagName:'div',

	className:'checkbox',

	template:JST['components/checkbox'],

	initialize:function(options) {
		this.name  = options.name;
		this.icon  = options.icon || 'default';
		this.title = options.title;

		this.render();
	},

	render:function() {
		var data = {
			name:this.name,
			icon:this.icon,
			title:this.title
		};

		this.$el.html(this.template(data));
	}

});