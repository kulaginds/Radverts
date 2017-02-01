class AddRefUserToAdverts < ActiveRecord::Migration[5.0]
  def change
    add_reference :adverts, :user, foreign_key: true
  end
end
