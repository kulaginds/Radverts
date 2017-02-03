/*
	Application component: TopMenu
*/

Radverts.Views.TopMenuItem = Backbone.View.extend({

	tagName:'li',

	template:template('top_menu_item_template'),

	events: {
		'click a':'itemClick'
	},

	initialize:function() {
		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template(this.model.attributes));
		if (this.model.get('active')) {
			this.$el.addClass('active');
		}
	},

	itemClick:function() {
		if (!this.model.get('active')) {
			this.model.set('active', true);
		}
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('active');
		} else {
			this.$el.removeClass('active');
		}
		this.render();
	}

});

Radverts.Views.TopMenuGiveAdvItem = Backbone.View.extend({

	tagName:'a',

	className:'btn btn-success navbar-btn give_advert',

	events: {
		'click':'itemClick'
	},

	initialize:function() {
		this.render();
	},

	render:function() {
		this.$el.html(this.model.get('title'))
				.attr('href', this.model.get('url'));
	},

	itemClick:function() {
		if (this.model.get('active')) {
			this.model.set('active', true);
		}
	}

});

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