import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function History() {
  const [activeTab, setActiveTab] = useState('On Going');
  const router = useRouter();

  const handleOrderPress = (order) => {
    router.push({
      pathname: 'orderstatus',
      params: { order },
    });
  };

  const ongoingOrder = {
    title: 'Burger Bang',
    id: 'BB312',
    subtotal: 'Rp 20.000',
    tax: '0',
    discount: '0',
    address: 'Jl. Dago No. 31, Dago, Bandung',
    pickupTime: '12 April 2024, 16.30 - 18.00',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/mainmenu')}>
          <Image
            style={styles.backButton}
            source={require('../assets/images/back_arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'On Going' && styles.activeTab]}
          onPress={() => setActiveTab('On Going')}
        >
          <Text style={[styles.tabText, activeTab === 'On Going' && styles.activeTabText]}>On Going</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Finished' && styles.activeTab]}
          onPress={() => setActiveTab('Finished')}
        >
          <Text style={[styles.tabText, activeTab === 'Finished' && styles.activeTabText]}>Finished</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {activeTab === 'On Going' && (
          <TouchableOpacity style={styles.card} onPress={() => handleOrderPress(ongoingOrder)}>
            <Image
              style={styles.cardImage}
              source={{ uri: 'https://asset.kompas.com/crops/JFC1_i_OaGvcNEviEw4WKk-r3qQ=/12x51:892x637/750x500/data/photo/2022/03/05/622358ed771fb.jpg' }} // Replace with your image source
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Burger Bang</Text>
              <Text style={styles.cardDate}>12 April 2024, 16.30 - 18.00</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Pending Pick Up</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        {activeTab === 'Finished' && (
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{ uri: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/13073811/Praktis-dengan-Bahan-Sederhana-Ini-Resep-Nasi-Goreng-Special-1.jpg.webp' }} // Replace with your image source
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Nasi Goreng</Text>
              <Text style={styles.cardDate}>
              10 April 2024</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Pending Review</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFE7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B6B',
  },
  tabText: {
    fontSize: 18,
    color: '#ccc',
  },
  activeTabText: {
    color: '#FF6B6B',
  },
  contentContainer: {
    paddingTop: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardContent: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 14,
    color: '#777',
  },
  statusContainer: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#FF6B6B',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
});