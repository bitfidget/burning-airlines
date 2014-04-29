BurningAirlines::Application.routes.draw do
  root :to => 'bookings#home'
  devise_for :users
  resources :reservations
  resources :flights
  resources :planes
end
