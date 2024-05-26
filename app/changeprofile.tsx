import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChangeProfile() {
  const router = useRouter();
  const [name, setName] = useState('Vasya Izza');
  const [email, setEmail] = useState('vasyaizza@gmail.com');
  const [phone, setPhone] = useState('+628376209123');
  const [address, setAddress] = useState('Jl. Dago Asri VI No. 21, Dago Atas, Bandung');

  const handleGoBack = () => {
    router.push('/myprofile');
  };

  const handleUpdate = () => {
    // Update profile
    router.push('/myprofile');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../assets/images/back_arrow.png')} 
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Change Profile</Text>
      </View>
      <Image
        source={require('../assets/images/profile-picture.png')} 
        style={styles.profileImage}
      />
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <TouchableOpacity onPress={handleUpdate} style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9EAE1',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6D6D6D',
    marginLeft: 20, 
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 12,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 40,
    marginBottom: 20,
    width: '90%',
    maxWidth: 400,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
  },
  updateButton: {
    backgroundColor: '#F2938C',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  updateButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
