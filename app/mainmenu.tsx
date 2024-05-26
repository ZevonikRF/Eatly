import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import Menu from '../components/menu';

export default function MainMenu() {
  const [selectedItem, setSelectedItem] = useState('Nearby');
  const router = useRouter();

  const handlePress = (item: string) => {
    setSelectedItem(item);
  };

  const handleNavigateToProfile = () => {
    router.push('/myprofile');
  };

  // Data mockup
  const menus = [
    {
      id: 1,
      restoname: "Burger Bang Boy",
      address: "Jl. Indeks No.95/A",
      opentime: "Pick Up Today | 15.00 - 18.00",
      rating: 5,
      price: 20000,
      image: require('../assets/images/wutdidijustsee.jpg'),
      tag1: 'Burger',
      tag2: 'Fast Food',
    },
    {
      id: 2,
      restoname: "Nasi Goreng Gemink",
      address: "Jl. PPAM No.3260",
      opentime: "Pick Up Today | 10.00 - 12.00",
      rating: 5,
      price: 13000,
      image: require('../assets/images/pz7qltuhh9g71.png'),
      tag1: 'Rice',
      tag2: 'Local Food',
    },
    {
      id: 3,
      restoname: "Olahan Ayam Bapak Eminem",
      address: "Jl. Sayangkuh No.8",
      opentime: "Pick Up Today | 08.00 - 20.00",
      rating: 4.5,
      price: 22000,
      image: require('../assets/images/15-753v0_20101214.jpg'),
      tag1: 'Chicken',
      tag2: 'Fast Food',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textDiscover}>Discover</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.textLocation}>Your Location</Text>
        <View style={styles.changeBox}>
          <Text style={styles.changeText}>Change</Text>
        </View>
      </View>
      <View style={styles.horizontalList}>
        {['Nearby', 'Promo', 'Cafe', 'Supermarket'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)}>
            <Text style={[styles.listItem, selectedItem === item && styles.selectedItem]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mainmenu')}>
          <Image source={require('../assets/images/home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/path/to/your/coupon/page')}>
          <Image source={require('../assets/images/coupon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToProfile}>
          <Image source={require('../assets/images/user.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/path/to/your/history/page')}>
          <Image source={require('../assets/images/history.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {menus?.map((item, index) => (
          <Menu key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f2',
  },
  textDiscover: {
    paddingTop: 130,
    paddingLeft: 55,
    fontWeight: 'bold',
    fontSize: 55,
  },
  textLocation: {
    paddingLeft: 60,
    fontWeight: 'bold',
    color: '#9a9a9d',
  },
  changeBox: {
    marginLeft: 'auto',
    marginRight: 90,
    backgroundColor: '#ff9d7b',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  changeText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  horizontalList: {
    flexDirection: 'row',
    paddingTop: 45,
    paddingLeft: 60,
  },
  listItem: {
    marginRight: 35,
    color: '#9a9a9d',
    fontSize: 16,
  },
  selectedItem: {
    color: '#fa4a0c',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff8f2',
    paddingVertical: 10,
    zIndex: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navImage: {
    width: 24,
    height: 24,
  },
  scrollViewContent: {
    paddingBottom: 70,
  },
});
