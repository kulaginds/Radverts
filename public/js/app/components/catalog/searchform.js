/*
	Application component: Catalog SearchForm
*/

Radverts.Views.CatalogSearchForm = Backbone.View.extend({

	tagName:'form',

	initialize:function(options) {
		this.render();
	},

	render:function() {
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
			options:categories
		});

		group = new Radverts.Views.FormGroup({
			title:'Категория',
			input:this.category.el
		});

		this.$el.append(group.el);

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