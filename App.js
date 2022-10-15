import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ConnectionScreen from './screens/ConnectionScreen';
import InscriptionScreen from './screens/InscriptionScreen';
import SnapScreen from './screens/SnapScreen';
import MessageScreen from './screens/MessageScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SNAPCHAT"
          component={HomeScreen}
          options={{ title: 'SNAPCHAT' }}
        />
        <Stack.Screen
          name="Inscription"
          component={InscriptionScreen}
          options={{ title: 'Inscription' }}
        />
        <Stack.Screen
          name="Connection"
          component={ConnectionScreen}
          options={{ title: 'Connection' }}
        />
        <Stack.Screen
          name="Snap"
          component={SnapScreen}
          options={{ title: 'Snap' }}
        />
        <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={{ title: 'Message' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;