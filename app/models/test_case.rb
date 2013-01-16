class TestCase < ActiveRecord::Base
  attr_accessible :api_name, :api_product, :app_name, :auth_field, :auth_path, :base_path, :bundle_name, :bundle_path, :developer, :name
  has_many :test_relationships
  has_many :regression_tests, :through => :test_relationships
end
