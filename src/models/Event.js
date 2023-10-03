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

// De esta forma se sobrescribe el serializador toJSON de mongoose que se ejecuta despues de que se realize el .save() para guardar el el objeto en la DB
EventSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject(); // this.toObject() hace referencia a todo el modelo Event que se esta serializando, por lo tanto puedo desestructurar las propiedades que se crearon despues de hacer el new Event(req.body), como por ejemplo el __v y _id

  object.id = _id; // En el objeto creo una nueva propiedad llamada id, que tendra como valor el _id de mongo

  //Propiedades que no son necesarias en la respuesta al front
  delete object.__v;
  delete object.createdAt;
  delete object.updatedAt;

  return object; // Retorno un nuevo objeto con la nueva propiedad id, pero sin las propiedades __v, _id, createdAt y updatedAt

  //! NOTA: Tener en cuenta que esto solo modifica el objeto que se envía como respuesta al front, por lo tanto el objeto se debería guardar con las propiedades __v, _id, createdAt y updatedAt en la db normalmente
});

const Event = model('Event', EventSchema);

export default Event;
