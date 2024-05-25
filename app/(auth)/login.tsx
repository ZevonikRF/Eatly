import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    // menuju page register
    router.push('/(auth)/register');
  };

  const handleApply = () => {
    // menuju page main menu
    router.push('/mainmenu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waste No Food!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} style={styles.loginButton} />
        <Button title="Sign Up" onPress={handleSignUp} style={styles.signUpButton} textStyle={styles.signUpButtonText} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#9a9a9d"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#9a9a9d"
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot passcode?</Text>
      </TouchableOpacity>
      <Button title="Apply" onPress={handleApply} style={styles.applyButton} />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9EAE1',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#6D6D6D',
      marginBottom: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    loginButton: {
      width: 100,
      marginRight: 10,
      backgroundColor: '#F2938C',
    },
    signUpButton: {
      width: 100,
      backgroundColor: 'transparent',
      borderColor: '#F2938C',
      borderWidth: 1,
    },
    signUpButtonText: {
      color: '#F2938C',
    },
    input: {
      width: '80%',
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginBottom: 20,
      fontSize: 16,
    },
    forgotPassword: {
      color: '#F2938C',
      marginBottom: 20,
    },
    applyButton: {
      width: 200,
      backgroundColor: '#F2938C',
    },
  });