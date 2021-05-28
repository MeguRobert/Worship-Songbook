import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import { globalStyles } from '../styles/global';
import Header from '../shared/header';
import React from 'react';

const screens =
{
  About: {
    screen: About,
    navigationOptions: ({ navigation }) =>
    {
      return {
        headerTitle: () => <Header title='Az appról' navigation={navigation}/> ,
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#0081a7' },
    headerTintColor: '#fff'
  }
});

export default AboutStack;