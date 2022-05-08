import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text>ListScreen</Text>
      <TouchableOpacity style={styles.wrapBtn} onPress={handleNavigate}>
        <Text style={styles.titleBtn}>Go to HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapBtn: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    borderRadius: 6,
  },
  titleBtn: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
