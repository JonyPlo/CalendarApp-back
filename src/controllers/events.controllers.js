import { response } from 'express';
import Event from '../models/Event';

export const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name'); // Dentro de los parentesis del metodo populate() hay que especificar una propiedad que sea una referencia, por ejemplo, el modelo Event tiene una propiedad llamada 'user' que almacena el _id del usuario cuando este mismo crea un evento, pero a su vez la propiedad 'user' tiene una propiedad llamada 'ref' que tiene como valor 'User', y User es el modelo de usuarios, asi que, en este caso, cuando se ejecuta populate('user'), lo que hace el metodo es tomar el valor de la propiedad 'user' que es el _id, busca en la colección de usuarios si ese _id coincide con el _id de algún usuario almacenado, y si lo encuentra, entonce guardara ese usuario encontrado en la propiedad, por lo tanto la propiedad 'user' ahora tendra el objeto del usuario completo y no solo el _id, pero si no lo encuentra, la propiedad 'user' queda solo con el _id que ya tenia.
  // Si dejamos solamente dejamos populate('user'), almacenara el objeto del usuario completo, pero si queremos solamente una propiedad especifica podemos aclararlo dentro del mismo metodo por ejemplo populate('user', 'name password'), esto nos devolvera un objeto con el _id que ese es el valor real de 'user' y la propiedad name y password del usuario que se encontro

  try {
    res.status(200).json({
      ok: true,
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};

export const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;

    await event.save();

    res.status(201).json({
      ok: true,
      event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};

export const updateEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid, body } = req;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'event not found',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'you do not have privileges to update this event',
      });
    }

    const modifiedEvent = await Event.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(200).json({
      ok: true,
      event: modifiedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};

export const deleteEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'event not found',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'you do not have privileges to update this event',
      });
    }

    await Event.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: 'the event was deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'internal server error. Please contact the administrator',
    });
  }
};
