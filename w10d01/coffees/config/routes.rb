Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :coffees
  # resources :origins

  resources :origins do
    resources :coffees
  end
end
