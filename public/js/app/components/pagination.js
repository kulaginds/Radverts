/*
	Application component: Pagination
*/

Radverts.Views.Pagination = Backbone.View.extend({

	tagName:'nav',

	template:template('pagination_template'),

	initialize:function() {
		this.render();
	},

	render:function() {
		var data = {
			previous_title:'Предыдущая страница',
			next_title    :'Следующая страница'
		};

		this.$el.attr('aria-label', 'pagination');
		this.$el.html(this.template(data));
	}

});