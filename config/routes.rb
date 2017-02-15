Rails.application.routes.draw do
  scope '/api' do
    resources :adverts
    resources :categories
    resources :users
  end
  root 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
