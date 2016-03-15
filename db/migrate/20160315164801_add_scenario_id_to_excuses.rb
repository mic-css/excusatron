class AddScenarioIdToExcuses < ActiveRecord::Migration
  def change
    add_reference :excuses, :scenario, index: true, foreign_key: true
  end
end
