module.exports = function(mongoose) {
  var collection = 'users';
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var schema = new Schema({
    author: ObjectId,
    name: String,
    date: Date
  });

  return mongoose.model(collection, schema);
};
