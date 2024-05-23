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
        flex: 1,
        marginLeft: 60,
        marginTop: 20,
        backgroundColor: '#F0F0F0',
        width: 300,
        height: 20,
    },
    menuImage:{

        aspectRatio: 6/4,
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