class Api::V1::ReviewsController < ApiController
  def create
    restroom = Restroom.find(params[:restroom_id])
    new_review = Review.new(review_params)
    new_review.restroom = restroom
    new_review.user = current_user

    if new_review.save
      render json: new_review
    else
      render json: { errors: new_review.errors.full_messages}
    end
  end

  def review_params
    params.require(:review).permit(:title, :description)
  end
end