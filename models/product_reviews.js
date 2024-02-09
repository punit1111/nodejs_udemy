const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const ProductReviews = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primarykey: true,
   // defaultValue: sql.uuidV4,
  },
  review_title: {
    type: DataTypes.UUID,
  },
  review_descriprion: {
    type: DataTypes.STRING,
  }, 
  ratings_count: {
    type: DataTypes.INTEGER,
  },
  is_liked: {
    type: DataTypes.BOOLEAN,
  },
  is_disliked: {
    type: DataTypes.BOOLEAN,
  },
  like_count: {
    type: DataTypes.INTEGER,
  },
  dislike_count: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.UUID,
  },
  product_id: {
    type: DataTypes.UUID,
  },
});

module.exports = ProductReviews;

// Table ProductReviews {
//     id string [primary key]
//     review_title varchar
//     review_descriprion varchar
//     ratings_count integer
//     is_liked bool
//     id_disliked bool
//     like_count integer
//     dislike_count integer
//     user_id integer [ref: < Users.id]
//     product_id integer [ref: > Product.id]
//   }
