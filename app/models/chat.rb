class Chat < ApplicationRecord
    belongs_to :relationship, foreign_key: "relationship_id"
    belongs_to :user, foreign_key: "from_id"

    #データ作成時、relationship_idが同じデータは1件のみに限定(一意)
    # validates :relationship_id, uniqueness

end
