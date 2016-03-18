# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Scenario.delete_all




scenario_1 = Scenario.create(title: 'Running late')
Excuse.create(title: 'Stuck in traffic', description: 'Hey there, The taffic sucks... what can I do. I will be there in a bit.', scenario:scenario_1)
Excuse.create(title: 'Dog ate shoes', description: 'Dear Dog, I\'m getting you put down tomorrow.', scenario:scenario_1)
Excuse.create(title: 'Abducted by aliens', description: 'I\'m going to be late dude, the aliens are refusing to remove the probe until Friday.', scenario:scenario_1)


scenario_2 = Scenario.create(title: 'Can\'t go')
Excuse.create(title: 'No reason', description: 'Hi, I was going to make it to your party, but then I decided to continue living my life. Peace.', scenario:scenario_2)


scenario_3 = Scenario.create(title: 'Not coming home')
Excuse.create(title: 'Tree hugging', description: 'Hey babe, Calling things off... I have fallen in love with a tree and frankly it is better in bed than you. Its got wood!', scenario:scenario_3)
Excuse.create(title: 'Commune', description: 'Sorry, but I have joined a cult and I now live in a commune... have a good life!', scenario:scenario_3)


scenario_4 = Scenario.create(title: 'Compromising position')
Excuse.create(title: 'No Underwear', description: 'Dear Sir/Madam, I am writing to inform you that following a series of unfortunate events, the crux of which involved a homeless man squatting in my washing machine, I have been unable to wash my pantyloons. Rather than disgracing my mothers good name, I am taking the day off! Goodnight.', scenario:scenario_4)
Excuse.create(title: 'Bad dream', description: 'I am very sorry to inform you that we can\'t meet with you today. I have a disturbing dream involving the both of us last night, and can no longer look you in the eye.', scenario:scenario_4)

scenario_5 = Scenario.create(title: 'Not coming into work')
Excuse.create(title: 'Tube Strike', description: 'Sorry, there has been a tube strike and I am far too posh to take the bus.', scenario:scenario_5)
Excuse.create(title: 'Work from home', description: "	I'm \"going\" to \"work\" from \"home\" \"today.\"", scenario:scenario_5)
