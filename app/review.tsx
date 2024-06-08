import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Review() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const router = useRouter();
  const totalPrice = 15000;
  const taxPrice = 0;
  const discountPrice = 0;

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSaveReview = () => {
    // Save review logic
    console.log('Review saved', { rating, review });
    router.push('/history');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back pressed')}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Review</Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.pickedUpContainer}>
          <Text style={styles.pickedUpText}>Picked Up</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={require('../assets/images/salad.jpg')} 
        />
        <Text style={styles.cardTitle}>Salad Start!</Text>
        <Text style={styles.orderId}>Order ID</Text>
        <View style={styles.orderBadge}>
          <Text style={styles.orderBadgeText}>SS695</Text>
        </View>
        <View style={styles.orderDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>Subtotal</Text>
            <Text style={styles.detailValue}>Rp {totalPrice}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>Tax</Text>
            <Text style={styles.detailValue}>Rp {taxPrice}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>Discount</Text>
            <Text style={styles.detailValue}>Rp {discountPrice}</Text>
          </View>
        </View>
        
        <Text style={styles.rateLabel}>Rate</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((rate) => (
            <TouchableOpacity key={rate} onPress={() => handleRating(rate)}>
              <Text style={[styles.star, rating >= rate && styles.selectedStar]}>★</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.reviewLabel}>Write your review</Text>
        <TextInput
          style={styles.reviewInput}
          placeholder=""
          value={review}
          onChangeText={setReview}
          multiline
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveReview}>
          <Text style={styles.saveButtonText}>Save Review</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#FFEFE7',
      padding: 20,
      alignItems: 'flex-start',
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
    card: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      marginTop: 20,
    },
    pickedUpContainer: {
      backgroundColor: '#FF6B6B',
      borderRadius: 5,
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    pickedUpText: {
      color: '#fff',
      fontSize: 14,
    },
    cardImage: {
      width: '60%',
      height: 200,
      borderRadius: 10,
      marginBottom: 15,
      alignItems: 'center', 
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    orderId: {
      fontSize: 16,
      marginBottom: 10,
    },
    orderBadge: {
      backgroundColor: '#FF6B6B',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignSelf: 'flex-start',
      marginBottom: 20,
    },
    orderBadgeText: {
      color: '#fff',
      fontSize: 14,
    },
    orderDetails: {
      marginBottom: 20,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    detailText: {
      fontSize: 16,
      color: '#777',
      fontWeight: 'bold',
    },
    detailValue: {
      fontSize: 16,
    },
    rateLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    star: {
      fontSize: 30,
      color: '#ccc',
    },
    selectedStar: {
      color: '#FF6B6B',
    },
    reviewLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    reviewInput: {
      width: '100%',
      height: 100,
      borderWidth: 1,
      borderColor: '#FF6B6B',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
    },
    saveButton: {
      backgroundColor: '#FF6B6B',
      borderRadius: 10,
      paddingVertical: 15,
      alignItems: 'center',
    },
    saveButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  });