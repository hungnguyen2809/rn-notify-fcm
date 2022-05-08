import React, {useEffect} from 'react';
import {logger} from '../services';
import fcmService from './FCMService';
import notifiService from './NotificationService';

const NotificationProvider = () => {
  useEffect(() => {
    fcmService.onRegisterAppWithFCM();
    fcmService.onRegister(onRegister, onNotification, onOpenNotification);
    notifiService.configure(onOpenNotification, onAction);

    return () => {
      fcmService.onUnRegister();
      notifiService.onUnRegister();
    };
  }, []);

  const onRegister = (token) => {
    logger.log('onRegister Token: ', token);
  };

  const onNotification = (notify) => {
    logger.log('onNotification: ', notify);

    const title = notify?.notification?.title;
    const message = notify?.notification?.body;
    const options = {
      playSound: true,
      soundName: 'default',
    };
    notifiService.showNotification(title, message, notify, options);
  };

  const onAction = (notification) => {
    logger.log('onAction: ', notification);
  };

  const onOpenNotification = (notification) => {
    logger.log('onOpenNotification: ', notification);
  };

  return <React.Fragment />;
};

export default NotificationProvider;
