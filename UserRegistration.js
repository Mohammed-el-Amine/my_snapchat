import React, { FC, ReactElement, useState } from "react";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Alert, Button, TextInput, View, StyleSheet, ImageBackground, Text } from 'react-native';

export const UserRegistration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    function Inscription(){
        const config = { headers:{'Content-Type': "application/json", Accept: "application/json" }}
        axios.post('http://snapi.epitech.eu:8000/inscription', { email, password }, config).then(response => {
            Alert.alert(
                `Merci ${email} .`,
                'Vous êtes inviter à vous connecter',
                [
                  {
                    text: 'ok',
                    onPress: () => {
                        navigation.navigate('Connection')
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
                value={email}
                placeholder={"email"}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                value={password}
                placeholder={"Password"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title={"Sign Up"} onPress={() => Inscription()} />
            </View>
    );
};
