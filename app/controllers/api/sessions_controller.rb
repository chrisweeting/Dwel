class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      # render :show;
      render 'api/users/show'
    else
      render json: ['incorrect email/ password'], status: 401
    end
  end

  def destroy

    if current_user
      logout!
      # render json: ['logout successful']
      render json: {}
    else
      render json: ['error'], status: 404
    end
  end
end