import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Menu from '@/components/menu';

export default function MainMenu() {
  const [selectedItem, setSelectedItem] = useState('Nearby');
  const router = useRouter();
  const params = useLocalSearchParams();

  const handlePress = (item: string) => {
    setSelectedItem(item);
  };

  const handleNavigateToProfile = () => {
    router.push('/myprofile');
  };

  const handleNavigateToMenuProfile = (menu: any) => {
    router.push({
      pathname: '/menuprofile',
      params: {
        ...menu,
        image: menu.image.uri, 
        whatYouGet: JSON.stringify(menu.whatYouGet)
      },
    });
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
      image: require('../assets/images/burger.jpeg'), 
      tag1: 'Burger',
      tag2: 'Fast Food',
      /*whatYouGet: [
        { item: 'Burger', image: require('../assets/images/burger-1.jpeg') },
        { item: 'French Fries', image: require('../assets/images/fries.jpg') },
        { item: 'Coca Cola', image: require('../assets/images/cocacola.jpeg') }
      ],*/
      whatYouGet1item: 'Burger',
      whatYouGet2item: 'French Fries',
      whatYouGet3item: 'Coca Cola',
      whatYouGet1image: require('../assets/images/burger-1.jpeg'),
      whatYouGet2image: require('../assets/images/fries.jpg'),
      whatYouGet3image: require('../assets/images/cocacola.jpeg'),
      
    },
    {
      id: 2,
      restoname: "Nasi Goreng Gemink",
      address: "Jl. PPAM No.3260",
      opentime: "Pick Up Today | 10.00 - 12.00",
      rating: 5,
      price: 13000,
      image: require('../assets/images/nasigoreng.jpeg'), 
      tag1: 'Rice',
      tag2: 'Local Food',
      /*whatYouGet: [
        { item: 'Nasi Goreng', image: require('../assets/images/nasigoreng.jpeg') },
        { item: 'Kerupuk', image: require('../assets/images/kerupuk.jpg') },
        { item: 'Es Teh Manis', image: require('../assets/images/icetea.jpg') }
      ],*/
      whatYouGet1item: 'Nasi Goreng',
      whatYouGet2item: 'Kerupuk',
      whatYouGet3item: 'Es Teh Manis',
      whatYouGet1image: require('../assets/images/nasigoreng.jpeg'),
      whatYouGet2image: require('../assets/images/kerupuk.jpg'),
      whatYouGet3image: require('../assets/images/icetea.jpg'),
    },
    {
      id: 3,
      restoname: "Olahan Ayam Bapak Eminem",
      address: "Jl. Sayangkuh No.8",
      opentime: "Pick Up Today | 08.00 - 20.00",
      rating: 4.5,
      price: 22000,
      image: require('../assets/images/friedchicken.jpeg'),
      tag1: 'Chicken',
      tag2: 'Fast Food',
      /*whatYouGet: [
        { item: 'Chicken Wings', image: require('../assets/images/chickenwings.jpg') },
        { item: 'Rice', image: require('../assets/images/rice.jpg') },
        { item: 'Sauce', image: require('../assets/images/sauce.jpg') }
      ],*/
      whatYouGet1item: 'Chicken Wings',
      whatYouGet2item: 'Rice',
      whatYouGet3item: 'Sauce',
      whatYouGet1image: require('../assets/images/chickenwings.jpg'),
      whatYouGet2image: require('../assets/images/rice.jpg'),
      whatYouGet3image: require('../assets/images/sauce.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*<TouchableOpacity>
          <Image
            source={require('../assets/images/menu.png')} 
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.textDiscover}>Discover</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/cart.png')} 
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>*/}
        <TouchableOpacity>
          <Image
            source={require('../assets/images/menu.png')} 
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/cart.png')} 
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.discoverContainer}>
        <Text style={styles.textDiscover}>Discover</Text>
      </View>
      <View style={styles.locationContainer}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.locationIcon}
        />
        <Text style={styles.textLocation}>Institut Teknologi Bandung</Text>
        <TouchableOpacity style={styles.changeBox}>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalList}>
        {['Nearby', 'Promo', 'Cafe', 'Supermarket'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)}>
            <Text style={[styles.listItem, selectedItem === item && styles.selectedItem]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/*ini udah ada di komponen menu gausah dibuat lagi harusnya 😭*/}
      {/*<ScrollView contentContainerStyle={styles.scrollViewContent}>
        {menus?.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuContainer} onPress={() => handleNavigateToMenuProfile(item)}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuDetails}>
              <Text style={styles.menuTitle}>{item.restoname}</Text>
              <Text style={styles.menuAddress}>{item.address}</Text>
              <Text style={styles.menuOpenTime}>{item.opentime}</Text>
              <Text style={styles.menuPrice}>Rp {item.price.toLocaleString()} /package</Text>
              <Text style={styles.menuRating}>Rating: {item.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>*/}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        {menus?.map((item,index) => (
          <Menu key={index} item={item}/>
        ))}
      </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mainmenu')}>
          <Image source={require('../assets/images/home.png')} style={[styles.navImage, { tintColor: '#fa4a0c' }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/voucher')}>
          <Image source={require('../assets/images/coupon.png')} style={styles.navImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToProfile}>
          <Image source={require('../assets/images/user.png')} style={styles.navImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/history')}>
          <Image source={require('../assets/images/history.png')} style={styles.navImage} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginLeft: 32,
  },
  cartIcon: {
    width: 24,
    height: 24,
    marginRight: 30,
  },
  discoverContainer:{
    marginTop: 40,
    marginLeft: 50,
  },
  textDiscover: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginLeft: 30,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  textLocation: {
    fontWeight: 'bold',
    color: '#9a9a9d',
  },
  changeBox: {
    marginLeft: 'auto',
    backgroundColor: '#ff9d7b',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 30,
  },
  changeText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  listItem: {
    marginRight: 20,
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
  },
  navItem: {
    alignItems: 'center',
  },
  navImage: {
    width: 24,
    height: 24,
  },
  scrollViewContent: {
    paddingVertical: 20,
    alignItems: 'center',
    //marginLeft: 70,
  },
  menuContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  menuDetails: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuAddress: {
    fontSize: 14,
    color: '#9a9a9d',
  },
  menuOpenTime: {
    fontSize: 14,
    color: '#9a9a9d',
  },
  menuPrice: {
    fontSize: 16,
    color: '#fa4a0c',
    marginTop: 5,
  },
  menuRating: {
    fontSize: 14,
    color: '#9a9a9d',
  },
});
