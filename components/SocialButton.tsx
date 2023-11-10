import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Social {
    uri: string
}
const SocialButtonClass: FC<Social> = props => {
    return (
        <View className="h-full w-full ">

        </View>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        textAlign: 'center',
        fontSize: 18,
    },
});
export default SocialButtonClass;