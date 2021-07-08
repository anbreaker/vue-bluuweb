const { Schema, model } = require('mongoose');

const NoteSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'The name is mandatory'],
    },

    description: String,

    userId: {
      type: Date,
      default: Date.now(),
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// To send response object without password or __version...
// Need function to use this!!
NoteSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;

  return user;
};

module.exports = model('Note', NoteSchema);
