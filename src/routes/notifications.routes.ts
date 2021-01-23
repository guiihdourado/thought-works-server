import { Router } from 'express';
import admin from 'firebase-admin';

import firebaseEnv from '../../firebase-env.json';

const notificationsRouter = Router();

notificationsRouter.post('/', async (request, response) => {
  const { name } = request.body;

  admin.initializeApp({
    credential: admin.credential.cert(firebaseEnv),
  });

  const message = {
    data: {
      type: 'notification',
      content: `Notification from ${name}!`,
    },
    topic: 'thoughtworks',
  };
  
  admin
    .messaging()
    .send(message)
    .then(responseMessage => {
      admin.app().delete();
      return response.status(201).json({ notification: 'OK' });
    })
    .catch(error => {
      admin.app().delete();
      return response.json(error);
    });

  
});

export default notificationsRouter;
