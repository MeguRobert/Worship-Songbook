import React from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";

const About = () =>
{
  const text = 'Az applikációt Megu Róbert készítette';

  return (
    <View>
      <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  textContainer: {  
    alignItems: 'center',
  },
  text: {
    color: '#0081a7',
    fontSize: 18,
  },
  header: {
    height: 200,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
});


export default About;