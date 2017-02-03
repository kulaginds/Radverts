/*
	Application component: TopMenu
*/

Radverts.Models.TopMenuItem = Backbone.Model.extend({

	defaults: {
		title  :'Link',
		url    :'#',
		active :false,
		giveAdv:false
	}

});

Radverts.Collections.TopMenuCollection = Backbone.Collection.extend({

	model:Radverts.Models.TopMenuItem,

	selected:null,

	addCallbacks:function() {
		_.each(this.models, this.addChangeEvent, this);
	},

	addChangeEvent:function(model) {
		model.on('change:active', this.updateActive, this);
	},

	updateActive:function(model, active) {
		if (active && this.selected != model) {
			if (this.selected != null) {
				this.selected.set('active', false);
			}

			this.selected = model;
		}
	},

	activateByUrl:function(url) {
		_.each(this.models, function(model) {
			var model_url = model.get('url');

			if (url == model_url) {
				model.set('active', true);
			}
		}, this);
	}

});

Radverts.Views.TopMenuItemView = Backbone.View.extend({

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

Radverts.Views.TopMenuGiveAdvItemView = Backbone.View.extend({

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
		this.model.set('active', !this.model.get('active'));
	}

});

Radverts.Views.TopMenuView = Backbone.View.extend({

	tagName:'ul',

	className:'nav navbar-nav navbar-right',

	initialize:function() {
		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);
	},

	addOne:function(model) {
		var _class = Radverts.Views.TopMenuItemView;

		if (model.get('giveAdv')) {
			_class = Radverts.Views.TopMenuGiveAdvItemView;
		}

		var item = new _class({
			model:model
		});

		this.$el.append(item.el);
	}

});