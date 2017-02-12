/*
	Application component: Advert
*/

Radverts.Models.Advert = Backbone.Model.extend({

	defaults: {

		user_id:0,
		category_id:0,
		title:'Test advert',
		description:'Test description',
		status:'success',
		error_message:'',
		updated_at:'2017-02-12T10:05:08.759Z',
		created_at:'2017-02-12T10:05:08.759Z'

	},

	parse:function(response, options) {
		response.created_at = new Date(Date.parse(response.created_at));
		response.updated_at = new Date(Date.parse(response.updated_at));

		return response;
	}

});

Radverts.Collections.Adverts = Backbone.Collection.extend({

	model:Radverts.Models.Advert

});

Radverts.Views.Advert = Backbone.View.extend({

	tagName:'div',

	className:'panel panel-default',

	initialize:function(options) {
		this.state    = options.state || 'catalog';
		this.template = template(this.state + '_advert_template');

		this.render();
	},

	render:function() {
		this.$el.html(this.template(this.model.attributes));
	}

});

Radverts.Views.Adverts = Backbone.View.extend({

	tagName:'div',

	className:'list',

	initialize:function(options) {
		this.state = options.state;

		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);

		this.pagination = new Radverts.Views.Pagination({});
		this.$el.append(this.pagination.el);
	},

	addOne:function(model) {
		var view = new Radverts.Views.Advert({
			model:model,
			state:this.state
		});

		this.$el.append(view.el);
	}

});