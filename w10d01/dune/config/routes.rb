Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :planets, except: [:show, :create]

  # get 'profile', to: 'users#show'

  # resources :planets
  # resources :characters

  resources :planets do
    resources :characters
  end

end
