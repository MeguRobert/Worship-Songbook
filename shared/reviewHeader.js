import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ navigation }) =>
{
  let t = navigation.getParam('transp');
  const title = navigation.getParam('title');
  const transp_up = () => {
    t++
    console.log(t);

  }
  const transp_down = () => {
    t--
    console.log(t);
  }

  return (
    <View>
      <View>
        <Text  numberOfLines={1} style={styles.headerText}>{title}</Text>
      </View>
      <View style = {styles.header}>  
        <TouchableOpacity onPress = {transp_up}>
          <Text>T+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {transp_down}>
          <Text>T-</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  headerText: {

    // fontFamily: 'Damion_400Regular',
    fontSize: 18,
    color: '#fff',
    // letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 0
  }

})

