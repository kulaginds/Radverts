/*
	Application component: FilterPanel
*/

Radverts.Views.FilterPanel = Backbone.View.extend({

	template:template('filter_panel_template'),

	initialize:function(options) {
		this.target      = options.section_name + '_filter_panel';
		this.search_form = options.search_form;

		this.render();
	},

	render:function() {
		var data = {
			target      :this.target,
			button_title:'Форма поиска',
			panel_title :'Поиск'
		};

		this.$el.html(this.template(data));

		this.$el.find('.panel-body').html(this.search_form);
	}

});