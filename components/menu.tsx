import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { useRouter } from 'expo-router';

export default function Menu({item}) {
    const router = useRouter();
    return (
        <Pressable style={styles.menuContainerBox}
            onPress={() => router.push({
                pathname:'/menuprofile',
                params: {
                    id: item.id,
                    restoname: item.restoname,
                    address: item.address,
                    opentime: item.opentime,
                    rating: item.rating,
                    price: item.price,
                    image: item.image,
                    tag1: item.tag1,
                    tag2: item.tag2,
                    whatYouGet1item: item.whatYouGet1item,
                    whatYouGet2item: item.whatYouGet2item,
                    whatYouGet3item: item.whatYouGet3item,
                    whatYouGet1image: item.whatYouGet1image,
                    whatYouGet2image: item.whatYouGet2image,
                    whatYouGet3image: item.whatYouGet3image,
                }})}>
            <Image style={styles.menuImage} source={{uri: item?.image}}/>
            <View style={styles.textAll}>
                <Text style={styles.menuTitle}>{item?.restoname}</Text>
                <Text>{item?.address}</Text>
                <Text>{item?.opentime}</Text>
                <View style={styles.ratingPriceContainer}>
                    <Text>Rating: {item?.rating}</Text>
                    <Text>Rp. {item?.price}</Text>
                </View>
            </View>
            
        </Pressable>
    );
       
}

const styles = StyleSheet.create({
    menuContainerBox:{
        //flex: 1,
        //marginLeft: 60,
        //marginTop: 20,
        //backgroundColor: '#ffffff',
        //width: 300,
        //height: 20,
        //borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,        
    },
    menuImage:{
        aspectRatio: 6/4,
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    textAll:{
        
    },
    menuTitle:{
        fontWeight: 'bold',
    },
    
    ratingPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});