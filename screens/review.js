import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

let size = 12


const Review = ({navigation}) =>
{
  const title = navigation.getParam('title');
  const text = navigation.getParam('text');
  const chords = navigation.getParam('chords');
  const transp = navigation.getParam('transp');
  // const [size, setSize] = useState(20)
  
  const increase = () => {
    size++
    console.log(size);
    console.log("increased");
  }
  const decrease = () => {
    size--
    console.log(size);
  }
   

  return (
    <ScrollView style={styles.scrollview}
      scrollEnabled={true}
    >
      <View style={{position: 'absolute', zIndex:1, right: 20}}>
        <TouchableOpacity onPress = {increase}>
          <Text>plus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {decrease}>
          <Text >minus</Text>
        </TouchableOpacity>
        <Text >
          MENU
        </Text>
      </View>
      <View>
        <Text style={[styles.text , styles.chords]}>{chords}</Text>
        <Text style={[styles.text , styles.lyrics]}>{text}</Text>
        {/* <Text style={styles.chords}>{transp}</Text> */}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollview: {
    flex: 1,
    backgroundColor: '#faf0ca',
  },
  titleContainer: {
    height: 60,
    backgroundColor: '#0081a7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  text: {
    fontSize: size,
    textAlign: 'justify',
    lineHeight:  size * 2,
  },
  lyrics: {
    color: '#000',
    paddingTop: size
  },
  header: {
    height: 80,
    backgroundColor: '#80AEBD',
    backgroundColor: '#0081a7',
    justifyContent: 'space-evenly',
  },
  chords:{
    color: 'coral',
    position: "absolute"
  }
});


export default Review;