# Reset the database
User.destroy_all
Flight.destroy_all
Plane.destroy_all
Reservation.destroy_all



#----------------------------------------------------

# user's seed file
user = User.new(:username => 'testuser1', :email => 'user1@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user.admin = true
user.save
user2 = User.new(:username => 'testuser2', :email => 'user2@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
user2.admin = true
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

# plane's seed file

plane = Plane.new(:rows => 12, :columns => 6, :model => "Boeing 777")
plane.save
plane1 = Plane.new(:rows => 24, :columns => 6, :model => "Boeing 747")
plane1.save
plane2 = Plane.new(:rows => 24, :columns => 9, :model => "Airbus A380")
plane2.save
plane3 = Plane.new(:rows => 24, :columns => 6, :model => "Airbus A320")
plane3.save



#----------------------------------------------------

# flight's seed file

flight = plane.flights.create(:flight_no => '412', :origin => "Sydney", :destination => "Melbourne", :departure => "29/04/2014 21:15")
flight.save
flight2 = plane2.flights.create(:flight_no => '413', :origin => "Sydney", :destination => "Melbourne", :departure => "29/04/2014 21:15")
flight2.save
flight3 = plane3.flights.create(:flight_no => '414', :origin => "Sydney", :destination => "Melbourne", :departure => "29/04/2014 21:15")
flight3.save
flight4 = plane1.flights.create(:flight_no => '415', :origin => "Perth", :destination => "Brisbane", :departure => "29/04/2014 23:15")
flight4.save
flight5 = plane2.flights.create(:flight_no => '420', :origin => "Brisbane", :destination => "Melbourne", :departure => "30/04/2014 07:15")
flight5.save

#----------------------------------------------------

# reservation's seed file

reservation = Reservation.new(:user_id => user.id, :flight_id => flight.id, :row_no => 4, :column_no => 3)
reservation = Reservation.new(:user_id => user2.id, :flight_id => flight.id, :row_no => 6, :column_no => 1)
reservation = Reservation.new(:user_id => user3.id, :flight_id => flight.id, :row_no => 11, :column_no => 6)
reservation.save


#----------------------------------------------------


