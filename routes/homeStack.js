import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/review';
import { globalStyles } from '../styles/global';
import Header from '../shared/header';
import ReviewHeader from '../shared/reviewHeader';
import React from 'react';

const screens =
{
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) =>
    {
      return {
        headerTitle: () => <Header title='Énekek' navigation={navigation}/> ,
      }
    }
  },
  Review: {
    screen: Review,
    navigationOptions: ({ navigation}) =>
    {

      return {
        headerTitle: () => <ReviewHeader  navigation={navigation} /> ,
      }
    }
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#0081a7', height: 80},
    headerTintColor: '#fff'
  }
});

export default HomeStack;