class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.string :row_no
      t.string :column_no

      t.timestamps
    end
  end
end
