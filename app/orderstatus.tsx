import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function OrderStatus() {
  const router = useRouter();

  const hardcodedOrder = {
    title: 'Burger Bang',
    id: 'BB312',
    subtotal: 'Rp 20.000',
    tax: 'Rp 0',
    discount: 'Rp 0',
    address: 'Jl. Dago No. 31, Dago, Bandung',
    pickupTime: 'Today, 12 April 2024 between 16.30 - 18.00',
  };

  const handleCancelOrder = () => {
    router.replace('/mainmenu'); // Ensure that this path matches your actual main menu route
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              style={styles.backButton}
              source={require('../assets/images/back_arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Order Status</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Pending Pick Up</Text>
          </View>
          <Image
            style={styles.image}
            source={{ uri: 'https://asset.kompas.com/crops/JFC1_i_OaGvcNEviEw4WKk-r3qQ=/12x51:892x637/750x500/data/photo/2022/03/05/622358ed771fb.jpg' }} // Replace with your image source
          />
          <View style={styles.orderDetails}>
            <Text style={styles.orderTitle}>{hardcodedOrder.title}</Text>
            <View style={styles.orderIdContainer}>
              <Text style={styles.orderIdText}>Order ID</Text>
              <View style={styles.orderIdBox}>
                <Text style={styles.orderIdValue}>{hardcodedOrder.id}</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.orderSummary}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={styles.summaryValue}>{hardcodedOrder.subtotal}</Text>
            </View>
            <View style={styles.orderSummary}>
              <Text style={styles.summaryText}>Tax</Text>
              <Text style={styles.summaryValue}>{hardcodedOrder.tax}</Text>
            </View>
            <View style={styles.orderSummary}>
              <Text style={styles.summaryText}>Discount</Text>
              <Text style={styles.summaryValue}>{hardcodedOrder.discount}</Text>
            </View>
            <View style={styles.divider} />
            <View>
              <Text style={styles.sectionTitle}>Pick-Up Address</Text>
              <Text>{hardcodedOrder.address}</Text>
            </View>
            <View style={styles.divider} />
            <View>
              <Text style={styles.sectionTitle}>Pick-Up Time</Text>
              <Text>{hardcodedOrder.pickupTime}</Text>
            </View>
            <View style={styles.divider} />
            <Text style={styles.note}>
              The store will provide packing for your food. But, we suggest you to bring your own bag to carry it home.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelOrder}>
          <Text style={styles.cancelButtonText}>Cancel Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFE7',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '95%',
    maxWidth: 450, 
  },
  statusContainer: {
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  statusText: {
    color: '#333',
    fontSize: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderDetails: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderIdText: {
    color: '#777',
    fontSize: 16,
  },
  orderIdBox: {
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  orderIdValue: {
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  orderSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryText: {
    color: '#777',
  },
  summaryValue: {
    color: '#000',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  note: {
    color: '#777',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#FF6B6B',
  },
});


