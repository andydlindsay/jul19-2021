class CharactersController < ApplicationController
  def index
    # req.params.planet_id
    # params[:planet_id]

    @planet = Planet.find(params[:planet_id]) # Planet.find 5
    @characters = @planet.characters
  end
end
