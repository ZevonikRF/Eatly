import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function MyProfile() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/mainmenu');
  };

  const handleChangeProfile = () => {
    router.push('/changeprofile');
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
        <Text style={styles.title}>My profile</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal details</Text>
          <TouchableOpacity onPress={handleChangeProfile}>
            <Text style={styles.changeText}>change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.personalDetails}>
          <Image
            source={require('../assets/images/profile-picture.png')}
            style={styles.profileImage}
          />
          <View style={styles.detailsText}>
            <Text style={styles.name}>Vasya Izza</Text>
            <Text style={styles.email}>vasyaizza@gmail.com</Text>
            <Text style={styles.phone}>+628376209123</Text>
            <Text style={styles.address}>Jl. Dago Asri VI No. 21, Dago Atas, Bandung</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Orders</Text>
        <Text style={styles.menuItemArrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Reviews</Text>
        <Text style={styles.menuItemArrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Faq</Text>
        <Text style={styles.menuItemArrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Help</Text>
        <Text style={styles.menuItemArrow}>›</Text>
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
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '90%',
    maxWidth: 400,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  changeText: {
    color: '#F2938C',
    fontSize: 16,
  },
  personalDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 12,
  },
  detailsText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  phone: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  address: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '90%',
    maxWidth: 400,
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemArrow: {
    fontSize: 16,
    color: '#6D6D6D',
  },
});
