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