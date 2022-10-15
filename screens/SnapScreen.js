import React from "react";
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Snap() {
  const navigation = useNavigation();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const onPress = () => {navigation.navigate('Message')};

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nous avons besoin de votre permission pour utilisé la camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nous avons besoin de votre permission pour utilisé la camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          {/* voir les snaps */}
          <TouchableOpacity style={styles.button} onPress= {onPress}>
            <Text style={styles.text}>📩</Text>
          </TouchableOpacity>
          {/* Prendre une photo */}
          <TouchableOpacity
            onPress=""
            style={styles.picture}
          />
          {/* inverser la camera */}
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>⟲</Text>
          </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    height: 70,
    bottom: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  picture: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    flex: 1,
    width: 70,
    height: 90,
    bottom: 0,
    borderRadius: 80,
    backgroundColor: '#fff'
  },
});