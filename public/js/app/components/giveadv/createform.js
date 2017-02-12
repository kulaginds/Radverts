/*
	Application component: Giveadv CreateForm
*/

Radverts.Views.GiveadvCreateForm = Backbone.View.extend({

	tagName:'form',

	initialize:function() {
		this.render();
	},

	render:function() {
		// поле "Заголовок"
		this.title = new Radverts.Views.InputText({
			name:'title',
			placeholder:'введите ключевые слова'
		});

		var group = new Radverts.Views.FormGroup({
			title:'Заголовок',
			input:this.title.el
		});

		this.$el.append(group.el);

		// поле "Категория"
		this.category = new Radverts.Views.InputSelect({
			name:'category',
			options:categories
		});

		group = new Radverts.Views.FormGroup({
			title:'Категория',
			input:this.category.el
		});

		this.$el.append(group.el);

		// поле "Описание"
		this.description = new Radverts.Views.InputTextArea({
			name:'description'
		});

		group = new Radverts.Views.FormGroup({
			title:'Описание',
			input:this.description.el
		});

		this.$el.append(group.el);

		// кнопка "Сохранить объявление"
		this.submit = new Radverts.Views.Button({
			type:'submit',
			title:'Сохранить объявление',
			className:'btn btn-primary pull-right'
		});

		this.$el.append(this.submit.el);
	}

});