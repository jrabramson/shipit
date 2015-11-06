Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  root to: 'campaigns#index'
  
  devise_for :contacts, :controllers => { registrations: 'registrations' }
  resources :contacts, only: [:new, :create, :edit, :update, :destroy]
  get 'manage' => 'campaigns#manage'
  get 'explore' => 'campaigns#browse'
  get 'leaderboard' => 'campaigns#leaderboard'
  resources :campaigns, param: :custom_path, path: '' do
    resources :referrals, only: [:create, :destroy, :update] do
      post 'push' => 'referrals#push'
      post 'deny' => 'referrals#deny'
    end
  end

  get '/manage', to: 'campaigns#manage'
  get '/explore', to: 'campaigns#browse'

end