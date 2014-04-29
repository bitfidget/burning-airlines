# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  rows       :integer
#  columns    :integer
#  model      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Plane < ActiveRecord::Base
	attr_accessible :rows, :columns, :model
	has_many :flights
end

