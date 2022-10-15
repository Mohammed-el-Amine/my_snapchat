import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, Button, TextInput, View, StyleSheet, ImageBackground, Text } from 'react-native';
import { UserLogIn } from "../UserLogin";


function App () {
  return (     
      <View style={styles.container}>
      <UserLogIn/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    backgroundColor: '#FFFC00',

  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10, //arrondire les buttons a corriger ne fonctionne pas encore
  },
});

export default App;