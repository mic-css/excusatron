require 'rails_helper'
describe Scenario, type: :model do
  it { is_expected.to have_many :excuses }

end
