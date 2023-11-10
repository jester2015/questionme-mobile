import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View, Button, Image, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as url from "url";
import { router } from 'expo-router';
interface GameSearching {
    title: string
}
const GameSearchingClass: FC<GameSearching> = props => {
    return (

            <View className="flex flex-col h-screen w-screen bg-sky-800 items-center justify-center content-center align-middle">

                <View className={"h-3/6 w-5/6 bg-blue-200 align-middle rounded-2xl shadow flex items-center content-center justify-center"}>
                    <Image className={"h-32 w-32 rounded-full shadow-2xl"} source={{uri: "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"}}/>
                    <Text className={"text-xl pt-10"}>Searching for a game...</Text>

                </View>
                <StatusBar backgroundColor='green' />
                <Button title='Testing' onPress={() => router.push('/(auth)/GamePlay/GameScreen')}></Button>
            </View>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        textAlign: 'center',
        fontSize: 18,
    },
});
export default GameSearchingClass;