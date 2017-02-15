Radverts.Views.Pagination = Backbone.View.extend({

	tagName:'nav',

	template:JST['components/pagination'],

	initialize:function(options = {}) {
		this.previous_title = options.previous_title || 'Предыдущая страница';
		this.next_title = options.next_title || 'Следующая страница';

		this.render();
	},

	hidePrev:function() {
		var prev = this.$el.find('.previous');

		if (!prev.hasClass('hide')) {
			prev.addClass('hide');
		}
	},
	showPrev:function() {
		var prev = this.$el.find('.previous');

		if (prev.hasClass('hide')) {
			prev.removeClass('hide');
		}
	},

	hideNext:function() {
		var next = this.$el.find('.next');

		if (!next.hasClass('hide')) {
			next.addClass('hide');
		}
	},

	showNext:function() {
		var next = this.$el.find('.next');

		if (next.hasClass('hide')) {
			next.removeClass('hide');
		}
	},

	render:function() {
		var data = {
			previous_title:this.previous_title,
			next_title    :this.next_title
		};

		this.$el.attr('aria-label', 'pagination');
		this.$el.html(this.template(data));
	}

});