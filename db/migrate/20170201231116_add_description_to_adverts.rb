class AddDescriptionToAdverts < ActiveRecord::Migration[5.0]
  def change
    add_column :adverts, :description, :string
  end
end
