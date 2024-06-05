import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function History() {
  const [activeTab, setActiveTab] = useState('Finished');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back pressed')}>
          <Text style={styles.backButton}>{'<'}</Text>
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
        {activeTab === 'Finished' && (
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image source
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Salad Start!</Text>
              <Text style={styles.cardDate}>10 April 2024</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Pending Review</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

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
    fontSize: 18,
    color: '#000',
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
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#FF6B6B',
    borderRadius: 5,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
});