# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Scenario.delete_all

scenario_1 = Scenario.create(title: 'Running late')
Scenario.create(title: 'Can\'t go')
Scenario.create(title: 'Not coming home')
# @scenario = Scenario.create()
# @scenario.type = 'Running late'
# @scenario.save

# @scenario = Scenario.create()
# @scenario.type = 'Can\'t go'
# @scenario.save
#
# @scenario = Scenario.create()
# @scenario.type = 'Not coming home'
# @scenario.save

Excuse.create(title: 'Stuck in traffic', description: 'Hi, I was going to make it to the meeting, but then I decided to continue my life.', scenario:scenario_1)
Excuse.create(title: 'Dog ate shoes', description: 'Usual excuse... deal with it!!!', scenario:scenario_1)
Excuse.create(title: 'Abducted by aliens', description: 'It happens', scenario:scenario_1)
