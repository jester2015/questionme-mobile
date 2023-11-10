import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View, Button, Image, TextInput, ScrollView} from 'react-native';
import { router } from 'expo-router';
import ButtonClass from '../../../components/Button';
interface GameScreen {
    title: string
}
const GameScreenClass: FC = props => {
    return (

            <View className="flex flex-col h-screen">

                <View className={"h-1/6 w-screen"}>

                </View>

                <View className={"h-2/6 w-screen  flex align-middle content-center justify-items-center items-center  justify-center p-10"}>

                    <Text className={"text-xl align-middle text-center"}>By all means, the lack of knowledge of the structure of the comprehensive set of policy statements ensures integrity of The Property of Autonomous Verification  </Text>
                </View>

                <View className={"h-auto w-screen bg-sky-200 flex align-middle  items-center  "}>

                    <View className={"-mt-5 bg-sky-800 w-3/6 h-10 rounded-full flex align-middle content-center justify-items-center items-center  justify-center"}>
                        <Text className={"text-white text-xl"}>Science</Text>
                    </View>

                    <View className={"flex w-full h-full p-5"}>
                        <ButtonClass title={"Answer 1"} className={"text-center bg-white"}></ButtonClass>
                        <ButtonClass title={"Answer 2"} className={"text-center"}></ButtonClass>
                        <ButtonClass title={"Answer 3"}></ButtonClass>
                        <ButtonClass title={"Answer 4"}></ButtonClass>
                        <Button title='Testing' onPress={() => router.push('/(auth)/Matchmaking/Matched')}></Button>
                    </View>
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
export default GameScreenClass;