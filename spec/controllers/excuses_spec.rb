require 'rails_helper'

describe ExcusesController do
  describe "GET scenarios/:scenario_id/excuses" do
    it "returns all excuses" do
      scenario = Scenario.create(title: "Running late")
      FactoryGirl.create(:excuse, title: "My dog ate my shoes", scenario: scenario)
      FactoryGirl.create(:excuse, title: "An alien warship blew up the bridge", scenario: scenario)
      FactoryGirl.create(:excuse, title: "I lost my only pair of trousers", scenario: scenario)

      get :index, {scenario_id: scenario.id}
      json = JSON.parse(response.body)

      expect(json[0]).to include("title" => "My dog ate my shoes")
      expect(json[1]).to include("title" => "An alien warship blew up the bridge")
      expect(json.length).to eq 3
    end
  end
end
