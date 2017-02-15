Radverts.Views.Content = Backbone.View.extend({

	tagName:'div',

	id:'content',

	initialize:function() {
		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);
	},

	addOne:function(model) {
		var class_name = model.get('route');
		class_name     = class_name.charAt(0).toUpperCase() + class_name.substr(1, class_name.length-1)

		var section = new Radverts.Views[class_name]({
			model:model,
			id   :model.get('id')
		});
		this.$el.append(section.el);
	}

});