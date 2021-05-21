class Api::ListingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    
    # listings = params[:bounds] ? Listing.with_attached_photos.filter_listings(params) : Listing.with_attached_photos.all
    listings = Listing.with_attached_photos.filter_listings(params)
    # debugger
    # if params[:minPrice] && params[:maxPrice] 
    #   listings = listings.where(price: price_range)
    # end
    
    if params[:query] != ''
      @listings = listings.search_listing(params[:query])
    else
      @listings = listings
    end
    # @listings = Listing.with_attached_photos.all

    render 'api/listings/index'
  end

  def show
    @listing = Listing.with_attached_photos.find(params[:id])

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

  def update
    @listing = Listing.find(params[:id])

    if @listing && @listing.update_attributes(listings_params)
      
      render 'api/listings/show'
    # elsif !@user
    #   render json: ['listing not found'], status: 400
    else
      render json: @listing.errors.full_messages, status: 401
    end
  end

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
      :longitude,
      :likers,
      :id,
      :photoUrls,
      :created_at,
      
    )
  end

  def price_range 
    (params[:minPrice]..params[:maxPrice])
  end

  def price_range 
    (params[:minPrice]..params[:maxPrice])
  end

  def price_range 
    (params[:minPrice]..params[:maxPrice])
  end

  def bounds
    params[:bounds]
  end
end