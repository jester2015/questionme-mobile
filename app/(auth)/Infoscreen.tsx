import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View, Button, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';
import ButtonClass from '../../components/Button';
interface Header {
    title: string
}
export const LogoutButton = () => {
    const { signOut } = useAuth();

    const doLogout = () => {
        signOut();
    }
}
const InfoScreenClass: FC = props => {

    return (
        <SafeAreaView >
            <View className="flex flex-col h-screen">
                <View className="bg-amber-950 w-screen h-2/6 p-3 flex  justify-center align-middle ">

                    <Image className="w-3/6 h-5/6 " style={{ alignSelf: 'center' }} source={{uri:'https://lcdn-us.icons8.com/c/GXuG-Ot1l0Cqv8mOTxIjCg/a415106f57c3c8b13f1c991d4d543ff5bc51dad7.png'}}/>
                </View>


            <View className="  w-full h-3/6 p-7">
                <Text className="text-4xl">Question Your Opponents</Text>
                <Text className="text-xl top-2.5">Come play the first game that allows you to determine your opponents fate</Text>

            </View>

                <ButtonClass title="Next"   />
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
export default InfoScreenClass;