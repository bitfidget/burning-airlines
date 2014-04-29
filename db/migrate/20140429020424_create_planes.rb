class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.integer :rows
      t.integer :columns
      t.string :model

      t.timestamps
    end
  end
end
