import { ImageBackground } from "react-native";
import blurBg from "../src/assets/bg-blur.png";
import Stripes from "../src/assets/stripes.svg";
import { styled } from "nativewind";
const StyledStripes = styled(Stripes);
import {useState, useEffect} from 'react'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

import { SplashScreen } from "expo-router";
import { Slot } from "expo-router";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from 'expo-secure-store';

export default function Layout() {

  const [isUserAuthenticated,setIsUserAuthenticated] = useState(null)

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  useEffect(()=> {
    SecureStore.getItemAsync('token').then(token => {
      setIsUserAuthenticated(!!token)
    })
  },[])

  if (!hasLoadedFonts) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />
      {/* <Slot/> */}
      {/* stack tem animação */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "trasnsparent" },
          animation:'fade',
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated}/>
        <Stack.Screen name="memories"/>
        <Stack.Screen name="new"/>
      </Stack>
    </ImageBackground>
  );
}
