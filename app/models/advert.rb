class Advert < ApplicationRecord
	enum status: [:process, :success, :error]
	has_many :users
	has_many :categories

	def category
		Category.where(id: self.category_id).take
	end
end
