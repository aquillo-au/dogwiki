require 'dotenv'
require 'json'
Dotenv.load

class Api::V1::DogsController < ApplicationController
  def index
    dogs = RestClient.get 'https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_nR5UCtRBC5b54iMFZAjWkbWP7zzyv8CJVl87DGTCQxHMEw9NC77O7MYsbQ4g2rIp'

    render json: dogs
  end

  def show
    url = 'https://api.thedogapi.com/v1/images/' + params[:id] + '?api_key=live_nR5UCtRBC5b54iMFZAjWkbWP7zzyv8CJVl87DGTCQxHMEw9NC77O7MYsbQ4g2rIp'
    dog = RestClient.get url

    render json: dog
  end
end
