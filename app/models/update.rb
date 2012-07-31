class Update < ActiveRecord::Base

  has_many :categories, :as => :categorizable
  has_and_belongs_to_many :tags
  belongs_to :user

end
