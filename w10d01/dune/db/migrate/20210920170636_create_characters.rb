class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.string :title
      t.string :city
      t.string :quote

      t.references :planet, foreign_key: true, index: true

      t.timestamps
    end
  end
end
