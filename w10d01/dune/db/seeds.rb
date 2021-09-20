# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Starting the seeds..."

puts "Creating the planets"
10.times do
  Planet.create(
    planet_name: Faker::Books::Dune.planet
  )
end

puts "Retrieving the planets"
planets = Planet.all

puts "Creating the characters"
50.times do
  Character.create(
    character_name: Faker::Books::Dune.character,
    title: Faker::Books::Dune.title,
    city: Faker::Books::Dune.city,
    quote: Faker::Books::Dune.quote,
    planet: planets.sample
  )
end

puts "All done!!"
