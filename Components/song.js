import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Song = (props) => { 
  return (
    <View style={styles.songcontainer}>
      <Text numberOfLines={1} style={styles.text}>{props.id}. {props.title}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'Nunito_400Regular',
    fontSize: 22,
    paddingLeft: 10,
  },
  songcontainer: {
    backgroundColor: '#0d3b66',
    height: 50,
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: 'center',
    marginHorizontal: 5,
  }
  
});

export default Song;