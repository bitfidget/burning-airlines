BurningAirlines::Application.routes.draw do

	# devise_for :users  #origin(change)
	# devise_for :users, :controllers => {sessions: 'sessions'}

	root :to => 'bookings#home'

  get 'flights/:id/reservations' => 'flights#reservations'

	devise_for :users
	resources :reservations
	resources :flights
	resources :planes




end
