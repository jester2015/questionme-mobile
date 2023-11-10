import React, {FC} from 'react';
import { StyleSheet, Text, StatusBar} from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
interface Header {
    title: string
}
    const HeaderClass: FC<Header> = props => {
        return (
            <SafeAreaView >
            <StatusBar backgroundColor='green' />
            <Text className="flex-1 bg-red-50" >{props.title}</Text>
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    textstyle: {
      textAlign: 'center',
      fontSize: 18,
    },
   });
export default HeaderClass;