<<<<<<< HEAD
user.rb
=======
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
>>>>>>> 66c21e128e3b13d4f036081ba6fc702c0ae5f9d9
