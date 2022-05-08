import PushNotification, {Importance} from 'react-native-push-notification';
import {logger} from './../services';

class NotificationService {
  constructor() {
    this.channelIdDefault = 'default-channel-id';
    this.createDefaultChannels();

    this.idNoti = 0;
  }

  configure(onOpenNotification, onAction) {
    PushNotification.configure({
      // onRegister: (token) => {
      //   logger.log('[onRegister] Token', token);
      // },
      onRegistrationError: (error) => {
        logger.log('[onRegistrationError]: ', error);
      },
      onAction: (notification) => {
        if (typeof onAction === 'function') {
          onAction(notification);
        }
      },
      onNotification: (notification) => {
        if (!notification.data) {
          return;
        }

        notification.userInteraction = true;
        if (typeof onOpenNotification === 'function') {
          onOpenNotification(notification);
        }
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  onUnRegister() {
    PushNotification.unregister();
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: this.channelIdDefault, // (required)
        channelName: 'Default channel', // (required)
        channelDescription: 'Default channel', // (optional) default: undefined.
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      (created) => {
        // logger.log('createDefaultChannels: ', created);
      },
    );
  }

  buildAndroidNoti(id, title, message, data = {}, options = {}) {
    return {
      id: id,
      data: data,
      subText: title || '',
      bigText: message || '',
      autoCancel: options.autoCancel || true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      vibrate: options.vibrate || true,
      vibration: options.vibration || 300,
      priority: options.priority || 'hight',
      importance: options.importance || 'hight',
    };
  }

  buildIOSNoti(id, title, message, data = {}, options = {}) {
    return {
      id: id,
      data: data,
      title: title || '',
      message: message || '',
      category: options.category || '',
      subtitle: options.subtitle,
    };
  }

  showNotification(title, message, data = {}, options = {}) {
    this.idNoti++;
    PushNotification.localNotification({
      id: this.idNoti,
      ...this.buildAndroidNoti(this.idNoti, title, message, data, options),
      ...this.buildIOSNoti(this.idNoti, title, message, data, options),
      badge: true,
      userInteraction: false,
      channelId: this.channelIdDefault,
      title: title || 'Thông báo',
      message: message || '',
      playSound: options.playSound || true,
      soundName: options.soundName || 'default',
    });

    return this.idNoti;
  }

  cancelAllLocalNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }

  cancelLocalNotification(notificationId) {
    PushNotification.cancelLocalNotification(notificationId);
  }
}

const notifiService = new NotificationService();
export default notifiService;
