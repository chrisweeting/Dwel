# @likes.each do |like|
#   json.set! like.id do
#     json.partial! "api/likes/likes", like: like
#   end
# end
@likes.each do |like|
  json.set! like.listing_id do
    json.partial! "api/likes/likes", like: like
  end
end