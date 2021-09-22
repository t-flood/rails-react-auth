if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_rails-react-auth', domain: 'rails-react-auth'
else
  Rails.application. config.session_store :cookie_store, key: '_rails-react-auth'
end
