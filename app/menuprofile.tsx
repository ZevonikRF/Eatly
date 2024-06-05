import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { CartContext } from '@/components/cartcontainer';

export default function MenuProfile({item}) {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [modalVisible,setModalVisible] = useState(false);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.restoname,
      price: item.price,
      quantity: 1,
      image: { uri: item.image },
    });
    router.push('/cartpage');
  };
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: params?.image }} style={styles.image} />
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push('/mainmenu')}>
        <Image source={{ uri: '../assets/images/back_arrow.png' }} style={styles.backArrowImage} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{params?.restoname}</Text>
        <Text style={styles.address}>{params?.address}</Text>
        <Text style={styles.pickupTime}>{params?.opentime}</Text>
        <View style={styles.tagsAndPrice}>
            <View style={styles.tagsContainer}>
                <View style={styles.tag}><Text style={styles.tagText}>{params?.tag1}</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>{params?.tag2}</Text></View>
            </View>
            <Text style={styles.price}>Rp. {params?.price}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>What Will You Get</Text>
            </View>
          <View style={styles.itemsContainer}>
            <View style={styles.item}>
              <Image source={{ uri: params?.whatYouGet1image }} style={styles.itemImage} />
              <Text style={styles.itemText}>{params?.whatYouGet1item}</Text>
            </View>
            <View style={styles.item}>
              <Image source={{ uri: params?.whatYouGet2image }} style={styles.itemImage} />
              <Text style={styles.itemText}>{params?.whatYouGet2item}</Text>
            </View>
            <View style={styles.item}>
              <Image source={{ uri: params?.whatYouGet3image }} style={styles.itemImage} />
              <Text style={styles.itemText}>{params?.whatYouGet3item}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>What People Are Saying</Text>
            </View>
          <View style={styles.ratingContainer}>
            <Image source={{ uri: '../assets/images/star-1.png' }} style={styles.starIcon} />
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
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>What You Need To Know</Text>
            </View>
          <Text>The store will provide packing for your food. But, we suggest you to bring your own bag to carry it home.</Text>
        </View>
        {/*<TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/cartpage')}>*/}
        {/*<Pressable style={styles.buttonContainer} onPress={() => setModalVisible(!modalVisible)*/}
        <Pressable style={styles.buttonContainer} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} transparent>
        <View style={styles.modalBoxContainer}>
          {/*{item?.map((item,index) => (

          ))}*/}
        </View>
      </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#0f0f0f',
    //borderBottomLeftRadius: 30,
    //borderBottomRightRadius: 30,
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
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  infoContainer: {
    position: 'absolute',
    top: 160,
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
  tagsAndPrice:{
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  sectionTitleContainer:{
    alignItems: 'center',
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
    //alignItems: 'center',
    justifyContent: 'center',
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
    position: 'absolute',
    paddingVertical: 15,
    marginHorizontal: 50,
    borderRadius: 20,
    bottom: 30,
    //transform: [{ translateX: -'50%' }],
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBoxContainer:{
    width: '45%',
    height: 500,
    backgroundColor: '#0f0f0f',
    position: 'absolute',
    bottom: 30,
    borderRadius: 20,
    marginHorizontal: 50,
    paddingLeft: 60,
    alignItems: 'center',
    
  },
});