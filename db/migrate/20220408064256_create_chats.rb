class CreateChats < ActiveRecord::Migration[6.1]
  def change
    create_table :chats do |t|
      t.integer :relationship_id, presence:true
      t.integer :from_id, presence:true
      t.text :message, null: false

      t.timestamps
    end
  end
end
