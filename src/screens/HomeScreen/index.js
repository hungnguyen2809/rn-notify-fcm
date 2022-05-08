import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import notifiService from '../../notification/NotificationService';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('ListScreen');
  };

  const onNoti = () => {
    const options = {
      playSound: true,
      soundName: 'default',
    };
    notifiService.showNotification('Thông báo', 'Đây là thông báo', {}, options);
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.wrapBtn} onPress={onNoti}>
        <Text style={styles.titleBtn}>Local Noti</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapBtn} onPress={handleNavigate}>
        <Text style={styles.titleBtn}>Go to ListScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapBtn: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 20,
  },
  titleBtn: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
