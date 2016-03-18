class AddDescriptionToExcuses < ActiveRecord::Migration
  def change
    add_column :excuses, :description, :text
  end
end
