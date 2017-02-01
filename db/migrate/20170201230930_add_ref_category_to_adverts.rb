class AddRefCategoryToAdverts < ActiveRecord::Migration[5.0]
  def change
    add_reference :adverts, :category, foreign_key: true
  end
end
