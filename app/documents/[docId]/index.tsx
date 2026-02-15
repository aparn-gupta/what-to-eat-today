import {View, Text} from 'react-native'
import {useLocalSearchParams} from "expo-router";

export default function Documents () {

    const { docId } = useLocalSearchParams()



    return (
        <View>
            <Text>Documents Page for doc {docId}

            </Text>
        </View>
    )
}