import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId, // Id de mongo
      ref: 'User', // Referencia al modelo User
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Event = model('Event', EventSchema);

export default Event;
