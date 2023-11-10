import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View, Button, Image, TextInput, ScrollView, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';
import GameTiles from '../../components/GameTiles';
interface Header {
    title: string
}
const HomeClass: FC = props => {
    const {user} = useUser();
    return (
         <SafeAreaView>
            <View className="flex flex-col h-screen">
                <View className="bg-blue-300 w-screen h-1/6  flex  justify-center align-middle pl-10 pr-10 content-center ">
                    <Text className={"text-lg "}>Hello again, {user?.emailAddresses[0].emailAddress}</Text>
                    <Text className={"text-xl "}>Ready to Play?</Text>
                    <Pressable onPress={() => router.push("/(auth)/Matchmaking/GameSearching")}><View className={"flex  bg-white rounded-2xl align-middle justify-items-center h-10 items-center content-center justify-center"}>
                        <Text className={" align-middle text-center  "}>Quick Play</Text>

                    </View>
</Pressable>
                </View>


                <View className="  w-full h-auto  flex gap-4">
                    <Text className={"text-xl pl-5"}>Play against friends</Text>
                    <ScrollView  horizontal={true}>
                        <GameTiles title={"Susan"}></GameTiles>
                        <GameTiles title={"William"}></GameTiles>
                        <GameTiles title={"Michael"}></GameTiles>
                        <GameTiles title={"Sarah"}></GameTiles>
                        <GameTiles title={"John"}></GameTiles>
                    </ScrollView>
                </View>

                <View className="  w-full h-auto  flex gap-4">
                    <Text className={"text-xl pl-5"}>Game Modes</Text>
                    <ScrollView horizontal={true}>
                        <GameTiles title={"Quick Play"}></GameTiles>
                        <GameTiles title={"Inside Mode"}></GameTiles>
                        <GameTiles title={"Super Mode"}></GameTiles>
                        <GameTiles title={"Recall Mode"}></GameTiles>

                    </ScrollView>
                </View>
                <View className=" w-full h-auto  flex gap-4">
                    <Text className={"text-xl pl-5"}>Manage</Text>
                    <ScrollView horizontal={true}>
                        <GameTiles title={"Settings"}></GameTiles>
                        <GameTiles title={"Contribute"}></GameTiles>
                        <GameTiles title={"leaderboards"}></GameTiles>
                    </ScrollView>
                </View>





                <StatusBar backgroundColor='green' />
            </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        textAlign: 'center',
        fontSize: 18,
    },
});
export default HomeClass;