class ExcusesController < ApplicationController
  respond_to :json
  before_action :load_excuses

  def index
    render json: @excuses
  end

  private

  def load_excuses
    scenario = Scenario.find(params[:scenario_id])
    @excuses = scenario.excuses.all
  end
end
