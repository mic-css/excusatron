require 'rails_helper'

describe ScenariosController do
  describe "GET/scenarios" do
    it "returns all scenarios" do
      FactoryGirl.create :scenario, title: "drunk"
      FactoryGirl.create :scenario, title: "ill"
      FactoryGirl.create :scenario, title: "dead"
      get :index
      json = JSON.parse(response.body)
      expect(json[0]).to include("title" => "drunk")
      expect(json[1]).to include("title" => "ill")
      expect(json.length).to eq 3
    end
  end
end
