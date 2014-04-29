BurningAirlines::Application.routes.draw do
  devise_for :users
  resources :reservations
  resources :flights
  resources :planes
end
