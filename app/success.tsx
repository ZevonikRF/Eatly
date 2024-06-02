import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Success(){
    const router = useRouter();
    return(
        <LinearGradient colors={['#ffffff', '#fad3b6']} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.middleContentContainer}>
                    <Text style={styles.thankyouText}>THANK YOU!</Text>
                    <Image source={require('../assets/images/basket.png')}/>
                    <Text style={styles.additText}>You just saved a meal from being wasted!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.backButton} onPress={() => router.push('/mainmenu')}>
                        <Text style={styles.buttonText}>Got It</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    middleContentContainer:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    thankyouText:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    additText:{
        fontWeight: 'bold',
        marginTop: 10,
    },

    buttonContainer:{
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton:{
        width: '90%',
        height: 55,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 15,
        color: '#ff9d7b',
        fontWeight: 'bold',
    }
})