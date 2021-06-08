class Api::LikesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @like = Like.new(listing_id: params[:listingId])
    @like.user_id = current_user.id
    # debugger
    if @like.save 

      render 'api/likes/show'
    else
      render json: @like, status: :unprocessable_entity
    end

  end

  def index
    if current_user
      @likes = Like.all.where(user_id: current_user.id)
    else
      @likes = {}
    end
    # debugger
    render 'api/likes/index'
  end

  def destroy
    # debugger
    @like = Like.find_by(listing_id: params[:id])
    
    if @like
      @like.destroy
      render json: [@like.listing_id]
    else
      render json: ['error'], status: 404
    end
  end
end