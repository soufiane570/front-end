import React from 'react';
import {StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Modal from 'react-native-modal';
// import LoginForm from './loginForm';

const Home = ({ navigation}) => {
  // const navigation = useNavigation();
  const handleformateurPress = () => {
    navigation.navigate('LoginForm');
  };
  const handleforgetpassworldPress = () => {
    navigation.navigate('ForgetPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/6HwhfW-LogoMakr.png")} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={handleformateurPress}>
        <Text style={styles.buttonText}>S'authentifier</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonObli} onPress={handleforgetpassworldPress}>
        <Text style={styles.buttonTexta}>Mote de pass oublier</Text>
      </TouchableOpacity>
      <StatusBar style='light' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTexta: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonObli: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default Home;
