import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Voucher() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/mainmenu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../assets/images/back_arrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Voucher</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../assets/images/coupon.png')}
          style={styles.voucherIcon}
        />
        <Text style={styles.noVoucherText}>No voucher yet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EAE1', // Matching the background color of myprofile
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6D6D6D',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  voucherIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  noVoucherText: {
    fontSize: 24,
    color: '#6D6D6D',
  },
});
