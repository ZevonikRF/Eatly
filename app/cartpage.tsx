import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cart() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nasi Goreng",
      price: 18000,
      quantity: 1,
      image: require('../assets/images/nasigoreng.jpeg'),
    },
    {
      id: 2,
      name: "Burger Bang",
      price: 20000,
      quantity: 1,
      image: require('../assets/images/burger.jpeg'),
    },
  ]);

  const handleQuantityChange = (id: any, delta: any) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      });
    });
  };

  const handleCompleteOrder = () => {
    // Handle order completion logic here
    console.log("Order completed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.push('/mainmenu')}>
          <Image source={{ uri: '../assets/images/back_arrow.png' }} style={styles.backArrowImage} />
        </TouchableOpacity>
        <Text style={styles.header}>Cart</Text>
      </View>
      <Text style={styles.swipeText}>swipe on an item to delete</Text>
      <ScrollView>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Rp {item.price.toLocaleString()}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.completeOrderButton} onPress={() => router.push('/payment')}>
        <Text style={styles.completeOrderButtonText}>Complete order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f2',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  backArrowImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  swipeText: {
    fontSize: 14,
    color: '#9a9a9d',
    textAlign: 'center',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#fa4a0c',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 18,
    color: '#fa4a0c',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  completeOrderButton: {
    backgroundColor: '#fa4a0c',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 20,
  },
  completeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
