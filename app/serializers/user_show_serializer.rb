class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :username, :profile_photo
end