Radverts.Views.TopMenu = Backbone.View.extend({

	tagName:'ul',

	className:'nav navbar-nav navbar-right',

	initialize:function() {
		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);
	},

	addOne:function(model) {
		var _class = Radverts.Views.TopMenuItem;

		if (model.get('giveAdv')) {
			_class = Radverts.Views.TopMenuGiveAdvItem;
		}

		var item = new _class({
			model:model
		});

		this.$el.append(item.el);
	}

});