/*
	Application component: Administration SearchForm
*/

Radverts.Views.AdministrationSearchForm = Backbone.View.extend({

	tagName:'form',

	initialize:function(options) {
		this.render();
	},

	render:function() {
		// поле "Имя"
		this.name = new Radverts.Views.InputText({
			name:'name'
		});

		var group = new Radverts.Views.FormGroup({
			title:'Имя',
			input:this.name.el
		});

		this.$el.append(group.el);

		// поле "ВКонтакте ID"
		this.id = new Radverts.Views.InputText({
			name:'id',
			type:'number'
		});

		var group = new Radverts.Views.FormGroup({
			title:'ВКонтакте ID',
			input:this.id.el
		});

		this.$el.append(group.el);

		// чекбокс "блокирован"
		this.banned = new Radverts.Views.InputCheckbox({
			name:'banned',
			icon:'danger',
			title:'блокирован'
		});

		this.$el.append(this.banned.el);

		// чекбокс "модераторатор"
		this.moderator = new Radverts.Views.InputCheckbox({
			name:'moderator',
			icon:'info',
			title:'модераторатор'
		});

		this.$el.append(this.moderator.el);

		// чекбокс "администратор"
		this.administrator = new Radverts.Views.InputCheckbox({
			name:'administrator',
			icon:'success',
			title:'администратор'
		});

		this.$el.append(this.administrator.el);

		// поле "Сортировать"
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