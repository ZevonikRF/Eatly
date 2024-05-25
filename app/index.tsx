import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/(auth)/login');
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#fad3b6']}
      style={styles.container}
    >
      <Image 
        source={require('../assets/images/logo-eatly.png')}
        style={[styles.image, styles.imageMargin]}
      />
      <Image 
        source={require('../assets/images/mark-eatly.png')}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  button: {
    position: 'absolute',
    bottom: 50, 
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#ff9d7b',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageMargin: {
    marginBottom: 20,
  },
});
