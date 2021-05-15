class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all

    render 'api/listings/index'
  end

  def show
    @listing = Listing.find(params[:id])

    render 'api/listings/show'
  end

  # def create
  #   @listing = Listing.new(listings_params)
  #   @listing.uploader_id = params[:uploader_id]

  #   if @listing.save
  #           redirect_to user_url(params[:uploader_id])
  #       else
  #           render json: ["Details can't be blank"]
  #           redirect_to user_url(params[:uploader_id])
  #       end
  #   end
  #   # render 'api/listings/show'
  # end

  # def update
  #   @listing = Listing.find(params[:id])

  #   if @listing && @listing.update_attributes(listings_params)
      
  #     render 'api/listings/show'
  #   elsif !@user
  #     render json: ['listing not found'], status: 400
  #   else
  #     render json: @listing.errors.full_messages, status: 401
  #   end
  # end

  # def destroy
  #   @listing = Listing.find(params[:id])
  #   if @listing && @listing.uploader_id == current_user
  #     @listing.destroy
  #     redirect_to user_url(params[current_user.id])
  #   else
  #     render json: ['error'], status: 400
  #     redirect_to user_url(current_user.id])
  #   end
  # end

  private

  def listings_params
    params.require(:listing).permit(
      :street_address,
      :city,
      :state,
      :postal_code,
      :description,
      :beds,
      :baths,
      :status,
      :price,
      :listing_type,
      :sq_ft,
      :lot_size,
      :year_built,
      :latitude,
      :longitude
    )
  end
end