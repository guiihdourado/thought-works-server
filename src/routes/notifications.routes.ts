import { Router } from 'express';
import * as admin from 'firebase-admin';

import firebaseEnv from '../../firebase-env.json';

const notificationsRouter = Router();

notificationsRouter.post('/', async (request, response) => {
  const { name } = request.body;

  admin.initializeApp({
    credential: admin.credential.cert(firebaseEnv)
  });

  const message = {
    data: {
      type: 'notification',
      content: `Notification from ${name}!`,
    },
    topic: 'thoughtworks',
  };
  
  await admin
    .messaging()
    .send(message)
    .then(responseMessage => {
      console.log('Successfully sent message:', responseMessage);
      return response.status(201).json({ notification: 'OK' });
    })
    .catch(error => {
      console.log('Error sending message:', error);
      return response.json(error);
    });
});

export default notificationsRouter;
