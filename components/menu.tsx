import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Menu({ menus }) {
    return (
        <View>
            <View style={styles.menuContainer}>
                {menus.map((menu, index) => (
                    <View key={index} style={styles.menuBox}>
                        <Text style={styles.menuName}>{menu.menuname}</Text>
                        <Text style={styles.menuAddress}>{menu.address}</Text>
                        <Text style={styles.menuOpenTime}>{menu.opentime}</Text>
                        <View style={styles.ratingPriceContainer}>
                            <Text style={styles.menuRating}>Rating: {menu.rating}</Text>
                            <Text style={styles.menuPrice}>Rp {menu.price}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        paddingLeft: 60,
        paddingTop: 30,
    },
    menuBox: {
        backgroundColor: '#8d95a1',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: 500,
    },
    menuName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    menuAddress: {
        fontSize: 14,
        color: '#ffffff',
    },
    menuOpenTime: {
        fontSize: 14,
        color: '#ffffff',
    },
    ratingPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuRating: {
        fontSize: 14,
        color: '#ffffff',
    },
    menuPrice: {
        fontSize: 14,
        color: '#ffffff',
    },
});