# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Scenario.delete_all

Scenario.create(title: 'Running late')
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
