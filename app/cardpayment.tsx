import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function CardPayment () {
  const router = useRouter(); 
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [validYear1, setValidYear1] = useState('');
  const [validYear2, setValidYear2] = useState('');

  const validateInput = () => {
    const cardNumberValid = /^\d{12}$/.test(cardNumber);
    const cvvValid = /^\d{3}$/.test(cvv);
    const validYear1Valid = /^\d{4}$/.test(validYear1);
    const validYear2Valid = /^\d{4}$/.test(validYear2);

    if (!cardNumberValid) {
      Alert.alert('Invalid Card Number');
      return false;
    }
    if (!cvvValid) {
      Alert.alert('Invalid CVV');
      return false;
    }
    if (!validYear1Valid) {
      Alert.alert('Invalid Year');
      return false;
    }
    if (!validYear2Valid) {
      Alert.alert('Invalid Year');
      return false;
    }

    return true;
  };

  const proceedToPayment = () => {
    router.push('/success');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Card</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name on Card</Text>
        <TextInput style={styles.input} placeholder="" />

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
          maxLength={12}
        />

        <Text style={styles.label}>Valid Through</Text>
        <View style={styles.validThroughContainer}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="YYYY"
            keyboardType="numeric"
            value={validYear1}
            onChangeText={setValidYear1}
            maxLength={4}
          />
          <Text style={styles.slash}>/</Text>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="YYYY"
            keyboardType="numeric"
            value={validYear2}
            onChangeText={setValidYear2}
            maxLength={4}
          />
        </View>
        
        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder=""
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
          maxLength={3}
        />
      </View>

      <TouchableOpacity onPress={proceedToPayment} style={styles.button} >
        <Text style={styles.buttonText}>Proceed to payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFEFE7',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF6B6B',
    padding: 10,
    marginBottom: 15,
  },
  validThroughContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallInput: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  slash: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});