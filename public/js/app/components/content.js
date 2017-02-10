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