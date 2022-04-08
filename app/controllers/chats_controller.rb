class ChatsController < ApplicationController
  include Common
  before_action :set_search_window
  before_action :verifi_datauser_loginuser_mdlbook, only: [:edit, :update]

  def index
    # binding.pry
    @to_user = User.find(params[:user_id])
    @from_user = User.find(current_user.id)
    @relationship_id = params[:relationship_id]
    @chat_index = Relationship.find(params[:relationship_id]).chats
    @chat_message = Chat.new

  end

  def create
    @chat = Chat.new(chat_message_params)
    @chat.from_id = params[:from_user_id]
    @chat.relationship_id = params[:relationship_id]
    # binding.pry
    @chat.save
    redirect_to user_relationship_chats_path(params[:user_id], params[:relationship_id])
  end


  private
  def chat_message_params
    params.require(:chat).permit(:message)
  end

end
