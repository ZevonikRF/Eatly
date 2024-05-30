import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function MenuProfile() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={{ uri: '../assets/images/burger.jpeg' }} style={styles.image} />
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push('/mainmenu')}>
        <Image source={{ uri: '../assets/images/back_arrow.png' }} style={styles.backArrowImage} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{params?.restoname}</Text>
        <Text style={styles.address}>{params?.address}</Text>
        <Text style={styles.pickupTime}>{params?.opentime}</Text>
        <View style={styles.tagsContainer}>
          <View style={styles.tag}><Text style={styles.tagText}>{params?.tag1}</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>{params?.tag2}</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>{params?.tag3}</Text></View>
        </View>
        <Text style={styles.price}>{params?.price}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Will You Get</Text>
          <View style={styles.itemsContainer}>
            <View style={styles.item}>
              <Image source={{ uri: '../assets/images/burger.jpeg' }} style={styles.itemImage} />
              <Text style={styles.itemText}>Burger</Text>
            </View>
            <View style={styles.item}>
              <Image source={{ uri: '../assets/images/fries.jpg' }} style={styles.itemImage} />
              <Text style={styles.itemText}>Fries</Text>
            </View>
            <View style={styles.item}>
              <Image source={{ uri: '../assets/images/cocacola.jpeg' }} style={styles.itemImage} />
              <Text style={styles.itemText}>Coca Cola</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What People Are Saying</Text>
          <View style={styles.ratingContainer}>
            <Image source={{ uri: '../assets/images/star-1.jpeg' }} style={styles.starIcon} />
            <Text style={styles.ratingText}>{params?.rating}/5</Text>
          </View>
          <View style={styles.highlights}>
            <View style={styles.highlight}>
              <Image source={{ uri: '../assets/images/thumbsup.png' }} style={styles.highlightImage} />
              <Text>Delicious Food</Text>
            </View>
            <View style={styles.highlight}>
              <Image source={{ uri: '../assets/images/smiley.png' }} style={styles.highlightImage} />
              <Text>Friendly Staff</Text>
            </View>
            <View style={styles.highlight}>
              <Image source={{ uri: '../assets/images/price.jpeg' }} style={styles.highlightImage} />
              <Text>Price Wise</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What You Need To Know</Text>
          <Text>The store will provide packing for your food. But, we suggest you to bring your own bag to carry it home.</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/cartpage')}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
  },
  backArrowImage: {
    width: 30,
    height: 30,
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  infoContainer: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    zIndex: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  address: {
    fontSize: 16,
    color: 'white',
  },
  pickupTime: {
    fontSize: 16,
    color: 'white',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#ff9d7b',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 5,
  },
  tagText: {
    color: 'white',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff8f2',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
  },
  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  highlight: {
    alignItems: 'center',
  },
  highlightImage: {
    width: 40,
    height: 40,
  },
  buttonContainer: {
    backgroundColor: '#ff9d7b',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});