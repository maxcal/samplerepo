class Partner < ActiveRecord::Base

  has_and_belongs_to_many :communities
  
  has_and_belongs_to_many :projects
  

end
