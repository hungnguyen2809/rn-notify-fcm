import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStackNavigation from './src/navigation/MainStack';
import NotificationProvider from './src/notification';

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
      <NotificationProvider />
    </React.Fragment>
  );
};

export default App;
