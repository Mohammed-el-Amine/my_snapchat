import react ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [image,setImage]=useState(null)
//   const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing:true
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {image && <Image source={{uri:image}} style={{flex:1,width:600}} />}
      <Button title="Pick Image" onPress={pickImage}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});