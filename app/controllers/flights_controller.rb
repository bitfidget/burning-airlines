class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]
  
  #must be logged in to use these functions
  before_filter :is_admin, :only => [:new, :create, :edit, :update, :destroy]
  before_filter :is_user

  def reservations
    reservations = Reservation.find(:all, :conditions => {:flight_id => params[:id]})
    # binding.pry
    respond_to do |format|
      format.html 
      format.json { render json: reservations, :include => :user} 
    end  
    
  end

  # GET /flights
  # GET /flights.json
  def index
    @flights = Flight.all

    # render :json => @flights #, :include => {:plane}

     respond_to do |format|
      format.html #{ redirect_to @user, notice: 'User was successfully created.' }
      format.json { render json: @flights, :include => :plane} #, status: :created, location: @user }
    end
  end

  # GET /flights/1
  # GET /flights/1.json
  def show

    @flight = Flight.find(params[:id])

    respond_to do |format|
      format.html #{ redirect_to @user, notice: 'User was successfully created.' }
      format.json { render json: @flight, :include => :plane} #, status: :created, location: @user }
    end
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save
        format.html { redirect_to "#flights/#{@flight.id}", notice: 'Flight was successfully created.' }
        # format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render action: 'show', status: :created, location: @flight }
      else
        format.html { render action: 'new' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:flight_no, :plane_id, :origin, :destination, :departure)
    end
    
end
