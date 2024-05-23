import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function MenuProfile(){
    const router = useRouter();
    const params = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.textSpacingResto}>{params?.restoname}</Text>
                <Text style={styles.textSpacing}>{params?.address}</Text>
                <Text style={styles.textSpacing}>{params?.opentime}</Text>
                <View style={styles.upperTagPrice}>
                    <View style={styles.upperButton1}>
                        <Text>{params?.tag1}</Text>
                    </View>
                    <Text>{params?.price}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.upperBottomContainer}>
                    <Text style={styles.upperBottomContainerText}>What Will You Get</Text>
                </View>
                <View style={styles.lowerBottomContainer}>
                    <Text style={styles.lowerBottomContainerText}>What People Are Saying</Text>
                    <View style={styles.ratingContainer}>
                        <Text>Rating {params?.rating}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text>Add to Cart</Text>
                </TouchableOpacity >
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    upperContainer:{
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'flex-end',
        paddingBottom: 20, 
    },
    bottomContainer:{
        flex: 2,
        backgroundColor: '#fff8f2',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    textSpacing:{
        marginVertical: 5,
    },
    textSpacingResto:{
        marginVertical: 5,
        fontWeight: 'bold',
    },
    upperTagPrice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    upperButton1:{
        width: 70,
        height: 25,
        backgroundColor: '#ff9d7b',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    upperBottomContainer:{
        alignItems: 'center',
        marginTop: 30,
    },
    upperBottomContainerText:{
        fontWeight: 'bold',
    },
    lowerBottomContainer:{
        alignItems: 'center',
        marginTop: 30,
    },
    lowerBottomContainerText:{
        fontWeight: 'bold',
    },
    ratingContainer:{
        marginTop: 15,
    },
    buttonContainer:{
        backgroundColor: '#ff9d7b',
        alignItems: 'center',
        paddingVertical: 23,
        marginHorizontal: 70,
        borderRadius: 20,
    }
})