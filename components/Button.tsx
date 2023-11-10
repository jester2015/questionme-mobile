import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Button {
    title: string
    className?: string

}
const ButtonClass: FC<Button> = props => {
    return (
       <View className={ `${props.className} bg-white flex justify-center align-middle border-2 m-2 h-14 w-full rounded-2xl shadow-2xl`} >
            <Text className="align-middle text-lg text-center ">{props.title}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        textAlign: 'center',
        fontSize: 18,
    },
});
export default ButtonClass;