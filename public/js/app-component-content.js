/*
	Application component: Content
*/

Radverts.Models.Section = Backbone.Model.extend({

	defaults: {
		title  :'Link',
		url    :'#',
		id     :null,
		route  :null,
		active :false,
		giveAdv:false
	}

});

Radverts.Collections.Sections = Backbone.Collection.extend({

	model:Radverts.Models.Section,

	selected:null,

	addCallbacks:function() {
		this.each(this.addChangeEvent);
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

	initRouter:function(router) {
		this.router = router;
		this.each(this.initOneRoute, this);
	},

	initOneRoute:function(model) {
		this.router.on('route:' + model.get('route'), function() {
			model.set('active', true);
			this.updateActive(model, true);
		}, this);
	}

});

Radverts.Views.Section = Backbone.View.extend({

	tagName:'section',

	className:'container',

	initialize:function(options) {
		this.template = template(options.id + '_template');

		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template({}));
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('show');
		} else {
			this.$el.removeClass('show');
		}
		this.render();
	}

});

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
		var section = new Radverts.Views.Section({
			model:model,
			id   :model.get('id')
		});
		this.$el.append(section.el);
	}

});