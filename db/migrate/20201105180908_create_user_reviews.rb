class CreateUserReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :user_reviews do |t|
      t.belongs_to :user, null: false
      
      t.string :title, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
