import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function MainMenu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handlePress = (item) => {
    setSelectedItem(item);
  };
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
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/images/home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/images/coupon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/images/user.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/images/history.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f2', 
  },
  textDiscover:{
    paddingTop: 130,
    paddingLeft: 55,
    fontWeight: 'bold',
    fontSize: 55,
    fontFamily: 'Arial',
  },
  textLocation:{
    paddingLeft: 60,
    fontWeight: 'bold',
    fontFamily: 'Arial',
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
    fontFamily: 'Arial',
  },
  selectedItem: {
    color: '#fa4a0c',
  },
  bottomNav:{
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navImage: {
    width: 24,
    height: 24,
  },
});