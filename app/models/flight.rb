# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  flight_no   :string(255)
#  plane_id    :integer
#  origin      :string(255)
#  destination :string(255)
#  departure   :datetime
#  created_at  :datetime
#  updated_at  :datetime
#

class Flight < ActiveRecord::Base
	attr_accessible :flight_no, :plane_id, :origin, :destination, :departure
	has_many :reservations
	belongs_to :plane
end
