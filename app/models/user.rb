# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password
  after_initialize :ensure_session_token

  has_many(
    :likes
  )

  has_many(
    :liked_listings,
    through: :likes,
    source: :listing
  )

  has_many(
    :search_records,
  )

  def self.find_by_credentials(email, password) 
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom.base64(64)
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(password_digest)
    password_object.is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token

    self.save!
    self.session_token
  end

end
