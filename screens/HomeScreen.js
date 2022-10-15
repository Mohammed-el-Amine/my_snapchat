import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = { uri: "https://i.pinimg.com/736x/83/18/bd/8318bd5f312fca87f78aa014c8155204.jpg" };

function HomeScreen() {
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <Button
        title="Connection"
        onPress={() => navigation.navigate('Connection')}
      />
      <Button
        title="Inscription"
        onPress={() => navigation.navigate('Inscription')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
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

export default HomeScreen;