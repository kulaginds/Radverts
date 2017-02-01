class AddTitleToAdverts < ActiveRecord::Migration[5.0]
  def change
    add_column :adverts, :title, :string
  end
end
