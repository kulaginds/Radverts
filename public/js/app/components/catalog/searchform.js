/*
	Application component: Catalog SearchForm
*/

Radverts.Views.CatalogSearchForm = Backbone.View.extend({

	tagName:'form',

	initialize:function(options) {
		this.categories = options.categories;

		this.render();
	},

	render:function() {
		this.$el.attr('action', '');
		this.$el.attr('method', 'GET');

		this.query = new Radverts.Views.InputText({
			name:'query',
			placeholder:'введите ключевые слова'
		});

		var group = new Radverts.Views.FormGroup({
			title:'Запрос',
			input:this.query.el
		});

		this.$el.append(group.el);

		this.category = new Radverts.Views.InputSelect({
			name:'category',
			options:this.categories
		});

		group = new Radverts.Views.FormGroup({
			title:'Категория',
			input:this.category.el
		});

		this.$el.append(group.el);

		var sort_options = new Radverts.Collections.Options([
			{
				title:'От новых к старым',
				value:'DESC'
			},
			{
				title:'От старых к новым',
				value:'ASC'
			}
		]);

		this.sort = new Radverts.Views.InputSelect({
			name:'sort',
			options:sort_options
		});

		group = new Radverts.Views.FormGroup({
			title:'Сортировать',
			input:this.sort.el
		});

		this.$el.append(group.el);
	}

});