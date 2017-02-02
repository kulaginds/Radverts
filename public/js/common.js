$(document).ready(function() {
	
	var Radverts = {
		Views: {},
		Models: {},
		Collections: {},
		Router: {}
	};

	// template helper
	var template = function(template_id) {
		return _.template($('#' + template_id).html());
	};

	/*
		Component: TopMenu
	*/

	Radverts.Models.TopMenuItem = Backbone.Model.extend({
		defaults: {
			title  :'Link',
			url    :'#',
			active :false,
			giveAdv:false
		}
	});

	Radverts.Collections.TopMenuCollection = Backbone.Collection.extend({
		model:Radverts.Models.TopMenuItem,
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

	Radverts.Views.TopMenuItemView = Backbone.View.extend({
		tagName:'li',
		template:template('top_menu_item_template'),
		events: {
			'click a':'itemClick'
		},
		initialize:function() {
			this.model.on('change:active', this.updateActive, this);
			this.render();
		},
		render:function() {
			this.$el.html(this.template(this.model.attributes));
			if (this.model.get('active')) {
				this.$el.addClass('active');
			}
		},
		itemClick:function() {
			if (!this.model.get('active')) {
				this.model.set('active', true);
			}
		},
		updateActive:function(model, active) {
			if (active) {
				this.$el.addClass('active');
			} else {
				this.$el.removeClass('active');
			}
			this.render();
		}
	});

	Radverts.Views.TopMenuGiveAdvItemView = Backbone.View.extend({
		tagName:'a',
		className:'btn btn-success navbar-btn give_advert',
		events: {
			'click':'itemClick'
		},
		initialize:function() {
			this.render();
		},
		render:function() {
			this.$el.html(this.model.get('title'))
					.attr('href', this.model.get('url'));
		},
		itemClick:function() {
			this.model.set('active', !this.model.get('active'));
		}
	});

	Radverts.Views.TopMenuView = Backbone.View.extend({
		tagName:'ul',
		className:'nav navbar-nav navbar-right',
		initialize:function() {
			this.render();
		},
		render:function() {
			this.collection.each(this.addOne, this);
		},
		addOne:function(model) {
			var _class = Radverts.Views.TopMenuItemView;

			if (model.get('giveAdv')) {
				_class = Radverts.Views.TopMenuGiveAdvItemView;
			}

			var item = new _class({
				model:model
			});

			this.$el.append(item.el);
		}
	});

	// Render
	var top_menu_items_collection = new Radverts.Collections.TopMenuCollection([
		{
			title :'Каталог',
			url   :'#catalog',
		},
		{
			title:'Мои объявления',
			url  :'#myadverts'
		},
		{
			title:'Модерация',
			url  :'#moderation'
		},
		{
			title:'Администрация',
			url  :'#administration'
		},
		{
			title  :'Подать объявление',
			url    :'#giveadv',
			giveAdv:true
		}
	]);
	top_menu_items_collection.addCallbacks();
	var top_menu_view = new Radverts.Views.TopMenuView({
		collection:top_menu_items_collection
	});

	$('#top_menu').html(top_menu_view.el);

	/*
		Application router
	*/

	Radverts.Router = Backbone.Router.extend({
		routes: {
			''              :'catalog',
			'catalog'       :'catalog',
			'myadverts'     :'myadverts',
			'giveadv'       :'giveadv',
			'moderation'    :'moderation',
			'administration':'administration'
		},
		catalog:function() {
			console.log('catalog page');
			top_menu_items_collection.activateByUrl('#catalog');
			$("section").removeClass('show');
			$("#catalog_section").addClass('show');
		},
		myadverts:function() {
			console.log('myadverts page');
			top_menu_items_collection.activateByUrl('#myadverts');
			$("section").removeClass('show');
			$("#myadverts_section").addClass('show');
		},
		giveadv:function() {
			console.log('giveadv page');
			top_menu_items_collection.activateByUrl('#giveadv');
			$("section").removeClass('show');
			$("#giveadv_section").addClass('show');
		},
		moderation:function() {
			console.log('moderation page');
			top_menu_items_collection.activateByUrl('#moderation');
			$("section").removeClass('show');
			$("#moderation_section").addClass('show');
		},
		administration:function() {
			console.log('administration page');
			top_menu_items_collection.activateByUrl('#administration');
			$("section").removeClass('show');
			$("#administration_section").addClass('show');
		}
	});

	var router = new Radverts.Router();
	Backbone.history.start();

});