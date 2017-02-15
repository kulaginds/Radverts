Radverts.Views.FormGroup = Backbone.View.extend({

	tagName:'div',

	className:'form-group',

	template:JST['components/formgroup'],

	initialize:function(options) {
		this.title = options.title;
		this.input = options.input;

		this.render();
	},

	render:function() {
		var data = {
			title:this.title
		};

		this.$el.html(this.template(data));

		this.$el.append(this.input);
	}
	
});