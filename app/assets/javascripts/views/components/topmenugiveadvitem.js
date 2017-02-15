Radverts.Views.TopMenuGiveAdvItem = Backbone.View.extend({

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
		if (this.model.get('active')) {
			this.model.set('active', true);
		}
	}

});