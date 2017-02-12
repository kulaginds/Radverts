/*
	Application component: User
*/

Radverts.Models.User = Backbone.Model.extend({

	defaults: {

		name:'test',
		picture:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTlmMzNiMTlkNyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1OWYzM2IxOWQ3Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQzLjgxMjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=',
		banned:0,
		moderator:0,
		administrator:0,
		updated_at:new Date(Date.parse('2017-02-12T10:05:08.759Z')),
		created_at:new Date(Date.parse('2017-02-12T10:05:08.759Z'))

	}

});

Radverts.Collections.Users = Backbone.Collection.extend({

	model:Radverts.Models.User

});

Radverts.Views.User = Backbone.View.extend({

	tagName:'div',

	className:'panel panel-default',

	template:template('user_template'),

	initialize:function(options) {
		this.render();
	},

	render:function() {
		this.$el.html(this.template(this.model.attributes));
	}

});

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