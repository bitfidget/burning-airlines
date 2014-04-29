class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_no
      t.integer :plane_id
      t.string :origin
      t.string :destination
      t.timestamp :departure

      t.timestamps
    end
  end
end
