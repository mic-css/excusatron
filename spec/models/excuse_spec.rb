require 'rails_helper'
describe Excuse, type: :model do
  it { is_expected.to belong_to :scenario }

end
