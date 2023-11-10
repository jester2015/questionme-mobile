import React, {FC} from 'react';
import {StyleSheet, Text, StatusBar, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
interface GameTiles {
    title: string
    background_tailwinds?: string

}
const GameTilesClass: FC<GameTiles> = props => {
    return (
       <View className={ `${props.background_tailwinds ? props.background_tailwinds : 'bg-sky-200'}  flex justify-center align-middle border-2 m-2 h-32 w-60 rounded-2xl shadow-2xl`} >
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
export default GameTilesClass;