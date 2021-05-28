import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Header = ({ title, navigation }) =>
{
  
  const openMenu = () =>
  {
    console.log('Menu');
    navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} color="black"
        style={styles.icon}
        onPress={openMenu}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {

    fontFamily: 'Pacifico_400Regular',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 0
  }

})

