import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts, Pacifico_400Regular} from '@expo-google-fonts/pacifico';
import {Nunito_400Regular} from '@expo-google-fonts/nunito';
// import {Damion_400Regular} from '@expo-google-fonts/damion';
import Navigator from './routes/drawer';

export default function App() {
    let [fontsLoaded] = useFonts({
      Pacifico_400Regular,
      Nunito_400Regular,
  });
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  else{
      return (
        <Navigator />
        
    )
  }
}