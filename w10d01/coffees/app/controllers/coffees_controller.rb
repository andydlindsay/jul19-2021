class CoffeesController < ApplicationController
  def index
    @origin = Origin.find(params[:origin_id])
    @coffees = @origin.coffees
  end
end
