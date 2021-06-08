class Api::SearchRecordsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @search_record = SearchRecord.new(search_record_params)
    @search_record.user_id = current_user.id
    if @search_record.save
      render 'api/search_records/show'
    else
      render json: @search_record.errors.full_messages
    end
  end

  def show
    @search_record = SearchRecord.find(params[:id])

    render 'api/search_records/show'
  end

  def update
    @search_record = SearchRecord.find(params[:id])

    if @search_record && @search_record.update_attributes(search_record_params)
      render 'api/search_records/show'
    elsif !search_record
      render json: ['saved search not found'], status: 400
    else
      render json: @search_record.errors.full_messages, status: 401
    end
  end

  def index
    if current_user
      @search_record = SearchRecord.all.where(user_id: current_user.id)
    else
      @search_record = nil
    end
    render 'api/search_records/index'
  end

  def destroy
    @search_record = SearchRecord.find_by(id: params[:id])
    
    if @search_record
      @search_record.destroy
      render json: [@search_record.id]
    else
      render json: ['error'], status: 404
    end
  end

  private
  def search_record_params
    params.require(:search_record).permit(
      :max_price,
      :max_sqft,
      :min_baths,
      :min_beds,
      :min_price,
      :query
    )
  end

end