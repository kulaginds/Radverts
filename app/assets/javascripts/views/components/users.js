Radverts.Views.Users = Backbone.View.extend({

	tagName:'div',

	className:'list',

	initialize:function() {
		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);

		this.pagination = new Radverts.Views.Pagination();
		this.$el.append(this.pagination.el);
	},

	addOne:function(model) {
		var view = new Radverts.Views.User({ model:model });

		this.$el.append(view.el);
	}

});