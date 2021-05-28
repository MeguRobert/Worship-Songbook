
import React, { useState} from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, FlatList,TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Song from '../Components/song';
import Searcher from '../Components/searcher';
import Data from '../database/data';

export default function Home({ navigation })
{
  const initialData = Data;
  const [songs, setSongs] = useState(initialData);
  const handleSongSearch = (text) =>
  {
    if (text == "") {
      setSongs(initialData);
      return;
    }
    setSongs(() =>
    {
      if (isNaN(text)) {
        return initialData.filter(song => song.title.match(text));
      }
      return initialData.filter(song => song.id.match(text));

    })
    
  }

  const pressHandler = (item) =>
  {
    navigation.navigate('Review',item);
  }

  return (
    // <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss}}>
    <View style={styles.container}>
        <Searcher handleSongSearch={handleSongSearch}/>
        <FlatList
          style={styles.flatlist}
          data={songs}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>pressHandler(item)}>
              <Song id={item.id} title={item.title}  />
            </TouchableOpacity>
          )}
          />
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0081a7',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  flatlist: {
    // flex: 0.5,
    backgroundColor: '#faf0ca',
    paddingTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    paddingLeft: 10,
  },
});
