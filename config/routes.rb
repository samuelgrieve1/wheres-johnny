Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users/:id', to: "homes#index"
  resources :users, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]

      resources :restrooms, only: [:index, :show] do
        resources :reviews, only: [:create]
      end
    end
  end
end
