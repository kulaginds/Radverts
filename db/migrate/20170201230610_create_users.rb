class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :banned
      t.integer :moderator
      t.integer :administrator

      t.timestamps
    end
  end
end
