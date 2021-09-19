# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data..."

puts "Creating the origins"
10.times do
  Origin.create(
    origin_name: Faker::Coffee.origin
  )
end

puts "Retrieving the origins"
origins = Origin.all

puts "Creating the coffees"
100.times do
  Coffee.create(
    blend_name: Faker::Coffee.blend_name,
    variety: Faker::Coffee.variety,
    notes: Faker::Coffee.notes,
    intensifier: Faker::Coffee.intensifier,
    origin: origins.sample
  )
end

puts "All done!"
