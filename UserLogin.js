import React, { FC, ReactElement, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
// import Parse from 'parse/react-native';
export const UserLogIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onLogin() {
        const config = { headers: { 'Content-Type': "application/json", Accept: "application/json" } };
        axios.post('http://snapi.epitech.eu:8000/connection/', { email, password }, config).then(response => {
            // const token = response.data.data["token"];
            Alert.alert(
                `Merci ${email} de vous être connecter,`,
                'Vous allez être rediriger',
                [
                  {
                    text: 'ok',
                    onPress: () => {
                        navigation.navigate('Snap')
                    },
                  },
                ],
                { cancelable: false },
              );

            return true;
        })
            .catch((error) => {
                Alert.alert('Error!', error.message);
                return false;
            });
    }
    return (
        <View>
            <TextInput
                placeholder={"Email"}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                placeholder={"Password"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title={"Login"} onPress={() => onLogin()} />
        </View>
    );
};