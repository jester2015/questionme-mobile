import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View, Button, Image, TextInput, ScrollView, Pressable} from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
interface Matched {
    title: string
}
export const LogoutButton = () => {
    const { signOut } = useAuth();

    const doLogout = () => {
        signOut();
    }
    return (
        <Button onPress={doLogout} title='Logout'></Button>
    )
}
const MatchedClass: FC = props => {
    return (

        <View className="flex flex-col h-screen w-screen bg-sky-800 items-center justify-center content-center align-middle">

            <View className={"h-3/6 w-5/6 bg-blue-200 align-middle rounded-2xl shadow flex items-center content-center justify-center"}>
                <Text className={"text-xl"}>Let's find out about your opponent!</Text>
                
            </View>
            <StatusBar backgroundColor='green' />
        </View>

    )
}

const styles = StyleSheet.create({
    textstyle: {
        textAlign: 'center',
        fontSize: 18,
    },
});
export default MatchedClass;