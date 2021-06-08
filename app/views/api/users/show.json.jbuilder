# json.extract! @user, :id, :email, :liked_listings
json.partial! "api/users/currentUser", user: @user
# json.likes @user.liked_listings.map {|user| user.id}