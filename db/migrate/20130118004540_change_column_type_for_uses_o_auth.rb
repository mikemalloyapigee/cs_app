class ChangeColumnTypeForUsesOAuth < ActiveRecord::Migration
  def up
    change_column :test_cases, :uses_oauth, :boolean
  end

  def down
  end
end
