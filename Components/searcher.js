import React from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";

const Searcher = (props) =>
{
  return (
    <View style={styles.header}>
      {/* keresés */}
      <KeyboardAvoidingView
        behavior = {Platform.OS=== "ios"? "padding" : 'height'}
        style={styles.search}
      >
        <TextInput
          style={styles.input}
          placeholder={'Keresés 🔍'}
          onChangeText={(input)=>props.handleSongSearch(input)} />
      </KeyboardAvoidingView>
    </View>
  );
}

cons
const styles = StyleSheet.create({
  header: {
    height: 40,
    justifyContent: 'center'
  },
  search: {
    paddingHorizontal: 40,
   
  },
  input: {
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#dedede',
    borderColor: '#c0c0c0',
    borderWidth: 1, 
  }
});


export default Searcher;