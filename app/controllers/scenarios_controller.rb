class ScenariosController < ApplicationController
  before_action :load_scenarios

  def index
    render json: @scenarios
  end

  private

  def load_scenarios
    @scenarios = Scenario.all
  end
end
