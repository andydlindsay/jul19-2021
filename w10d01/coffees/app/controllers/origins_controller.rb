class OriginsController < ApplicationController
  def index
    @origins = Origin.all
  end
end
