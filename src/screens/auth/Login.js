import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [loginModal, setLoginModal] = useState(false);
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
