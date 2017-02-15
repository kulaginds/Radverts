Radverts.Models.Advert = Backbone.Model.extend({

	defaults: {

		user_id:0,
		category_id:0,
		title:'Test advert',
		description:'Test description',
		status:'process',
		error_message:'',
		updated_at:new Date(Date.parse('2017-02-12T10:05:08.759Z')),
		created_at:new Date(Date.parse('2017-02-12T10:05:08.759Z'))

	}

});