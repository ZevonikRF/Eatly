import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, Pressable } from 'react-native';

export default function RedoPayment(){
    const router = useRouter();
    const dummyPrice = 18000;
    const deliveryPrice = 5000;
    const [selectedRadioAtas, setSelectedRadioAtas] = useState(1);
    const [selectedRadioBawah, setSelectedRadioBawah] = useState(3);
    const toPayment = () => {selectedRadioAtas == 1 ? router.push('/cardpayment') : router.push('/virtualaccount')};
    return(
        <View style={styles.container}>
            <View style={styles.upperNav}>
                <Text>Checkout</Text>
            </View>
            <View style={styles.paymentContainer}>
                <Text style={styles.paymentText}>Payment</Text>
            </View>
            <View style={styles.paymentMethodContainer}>
                <Text style={styles.paymentMethodText}>Payment Method</Text>
                <View style={styles.paymentMethodBox}>
                    <View style={styles.upperChoiceContainer}>
                        <TouchableOpacity onPress={() => setSelectedRadioAtas(1)}>
                            <View style={styles.radio}>
                                {selectedRadioAtas==1? <View style={styles.radioDalem}></View> :null}
                            </View>
                        </TouchableOpacity>
                        <Text>Credit Card</Text>
                    </View>
                    <View style={styles.lowerChoiceContainer}>
                        <TouchableOpacity onPress={() => setSelectedRadioAtas(2)}>
                            <View style={styles.radio}>
                                {selectedRadioAtas==2? <View style={styles.radioDalem}></View> :null}
                            </View>
                        </TouchableOpacity>
                        <Text>Virtual Account</Text>
                    </View>
                </View>
            </View>
            <View style={styles.voucherContainer}>
                <Text style={styles.voucherText}>Apply Voucher</Text>
                <View style={styles.voucherBox}>
                    <View style={styles.voucherBoxContent}>
                        <Text>Apply Voucher</Text>
                    </View>
                </View>
            </View>
            <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryText}>Delivery Method</Text>
                <View style={styles.deliveryBox}>
                    <View style={styles.upperDeliveryContainer}> 
                        <TouchableOpacity onPress={() => setSelectedRadioBawah(3)}>
                            <View style={styles.radio}>
                                {selectedRadioBawah==3? <View style={styles.radioDalem}></View> :null}
                            </View>
                        </TouchableOpacity>
                        <Text>Pick Up</Text>
                    </View>
                    <View style={styles.lowerDeliveryContainer}> 
                        <TouchableOpacity onPress={() => setSelectedRadioBawah(4)}>
                            <View style={styles.radio}>
                                {selectedRadioBawah==4? <View style={styles.radioDalem}></View> :null}
                            </View>
                        </TouchableOpacity>
                        <View style={styles.pickupDeliveryContainer}>
                            <Text>Delivery (Rp {deliveryPrice})</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContent}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <View style={styles.finalPrice}>
                        <Text style={styles.finalPriceText}>Rp {dummyPrice}</Text>
                    </View>  
                </View>
                <View style={styles.pickupDeliveryContainer}>
                    <Pressable style={styles.paymentProceedButton} onPress={toPayment}>
                        <Text style={styles.paymentProceedText}>Proceed to Payment</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#fff8f2',
    },
    upperNav:{
        marginTop: 30,
        alignItems: 'center',
    },
    paymentContainer:{
        marginTop: 20,
        marginLeft: 40,
    },
    paymentText:{
        fontSize: 35,
        fontWeight: 'bold',
    },
    paymentMethodContainer:{
        marginTop: 30,
        marginLeft: 40,
    },
    paymentMethodText:{
        fontSize: 20,
    },
    paymentMethodBox:{
        marginTop: 20,
        backgroundColor: '#ffffff',
        width: '95%',
        height: 85,
        borderRadius: 20,
    },
    upperChoiceContainer:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },
    radio:{
        width: 20,
        height: 20,
        borderColor: '#000000',
        borderRadius: 20,
        borderWidth: 3,
        marginRight: 10,
    },

    radioDalem:{
        backgroundColor: '#000000',
        width: 10,
        height: 10,
        margin: 2,
        borderRadius: 20,
    },

    lowerChoiceContainer:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },
    voucherContainer:{
        marginTop: 30,
        marginLeft: 40,
    },
    voucherText:{
        fontSize: 20,
    },

    voucherBox:{
        marginTop: 20,
        backgroundColor: '#ffffff',
        width: '95%',
        height: 55,
        borderRadius: 20,
        justifyContent: 'center',
    },

    voucherBoxContent:{
        marginLeft: 20,
    },

    deliveryContainer:{
        marginTop: 20,
        marginLeft: 40,
    },

    deliveryText:{
        fontSize: 20,
    },

    deliveryBox:{
        marginTop: 20,
        backgroundColor: '#ffffff',
        width: '95%',
        height: 85,
        borderRadius: 20,
        //justifyContent: 'center',
    },

    upperDeliveryContainer:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },

    lowerDeliveryContainer:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },

    pickupDeliveryContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    /*delivPrice:{
        marginLeft: 'auto',
    },*/

    bottomContent:{
        marginLeft: 40,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: 25,
    },

    totalContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    finalPrice:{
        marginLeft: 'auto',
        marginRight: 40,
    },

    totalText:{
        fontSize: 20,
    },

    finalPriceText:{
        fontSize: 20,
    },

    paymentProceedButton:{
        marginTop: 20,
        backgroundColor: '#ff9d7b',
        width: '95%',
        height: 85,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    paymentProceedText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',
    },
})