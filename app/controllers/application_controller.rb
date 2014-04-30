class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def is_user
      unless current_user
        flash[:error] = "Please sign up to view flights"
        redirect_to "/users/sign_in" 
      end  
  end

 def is_admin
      unless user_signed_in? && current_user.admin
        flash[:error] = "You must be logged on as Admin to modify this"
        redirect_to "/users/sign_in" 
      end  
  end

end