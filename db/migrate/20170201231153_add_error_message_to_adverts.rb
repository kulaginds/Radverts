class AddErrorMessageToAdverts < ActiveRecord::Migration[5.0]
  def change
    add_column :adverts, :error_message, :string
  end
end
