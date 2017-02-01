class AddStatusToAdverts < ActiveRecord::Migration[5.0]
  def change
    add_column :adverts, :status, :integer
  end
end
