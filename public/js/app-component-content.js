/*
	Application component: Content
*/

Radverts.Models.Section = Backbone.Model.extend({

	defaults: {
		title  :'Link',
		url    :'#',
		active :false,
		giveAdv:false
	}

});

Radverts.Collections.Sections = Backbone.Collection.extend({

	model:Radverts.Models.Section,

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