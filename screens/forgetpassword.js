import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,Image} from 'react-native';

const ForgetPasswordScreen = () => {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleRecoverPassword = () => {
    // Here, you can implement the logic to recover the password
    // For example, you can send a reset link to the provided email or phone number
    // You may also want to handle validation and error messages
    // For simplicity, I'm just setting a message here
    setMessage(`Password recovery instructions have been sent to ${emailOrNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Image
          source={require("./assets/6HwhfW-LogoMakr.png")}
          style={{
            width: 200,
            height: 150,
            alignSelf: "center",
            marginBottom: 50,
          }}
        />
      <TextInput
        style={styles.input}
        placeholder="Enter Email or Phone Number"
        value={emailOrNumber}
        onChangeText={setEmailOrNumber}
      />
      <Button style={styles.button} title="Recover Password" onPress={handleRecoverPassword} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 20,
    color: 'green',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default ForgetPasswordScreen;
