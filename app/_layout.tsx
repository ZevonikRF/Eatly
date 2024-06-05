import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { CartProvider } from "@/components/cartcontainer";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function Layout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen name="mainmenu" options={{ headerShown: false }} />
        <Stack.Screen name="history" options={{ headerShown: false }} />
        <Stack.Screen name="myprofile" options={{ headerShown: false }} />
        <Stack.Screen name="changeprofile" options={{ headerShown: false }} />
        <Stack.Screen name="menuprofile" options={{ headerShown: false }} />
        <Stack.Screen name="voucher" options={{ headerShown: false }} />
        <Stack.Screen name="cartpage" options={{ headerShown: false }} />
        <Stack.Screen name="payment" options={{ headerShown: false }} />
        <Stack.Screen name="redopayment" options={{ headerShown: false }} />
        <Stack.Screen name="cardpayment" options={{ headerShown: false }} />
        <Stack.Screen name="virtualaccount" options={{ headerShown: false }} />
        <Stack.Screen name="success" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
      
  );
}

