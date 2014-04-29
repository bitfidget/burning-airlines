# Reset the database
User.destroy_all
Flight.destroy_all
Plane.destroy_all
Reservation.destroy_all



#----------------------------------------------------

# user's seed file
user = User.new(:username => 'testuser1', :email => 'user1@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user.save
user2 = User.new(:username => 'testuser2', :email => 'user2@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user2.save
user3 = User.new(:username => 'testuser3', :email => 'user3@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user3.save
user4 = User.new(:username => 'testuser4', :email => 'user4@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user4.save
user5 = User.new(:username => 'testuser5', :email => 'user5@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user5.save
user6 = User.new(:username => 'testuser6', :email => 'user6@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user6.save

#----------------------------------------------------

# flight's seed file

flight = Flight.new(:flight_no => '412', :plane_id => 1, :origin => "Sydney", :destination => "Melbourne", :departure => "29/04/2014 21:15")


#----------------------------------------------------

# plane's seed file

plane = Plane.new(:rows => 12, :columns => 6, :model => "747")


#----------------------------------------------------

# reservation's seed file

reservation = Reservation.new(:user_id => 1, :flight_id => 1, :row_no => "4", :column_no => "3")
reservation = Reservation.new(:user_id => 2, :flight_id => 1, :row_no => "6", :column_no => "1")
reservation = Reservation.new(:user_id => 3, :flight_id => 1, :row_no => "11", :column_no => "6")


#----------------------------------------------------


