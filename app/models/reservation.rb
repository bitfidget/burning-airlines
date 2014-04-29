# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  flight_id  :integer
#  row_no     :string(255)
#  column_no  :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Reservation < ActiveRecord::Base
	attr_accessible :user_id, :flight_id, :row_no, :column_no
	belongs_to :user
	belongs_to :flight
end
