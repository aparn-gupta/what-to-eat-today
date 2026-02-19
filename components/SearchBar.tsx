import {View, Text, TextInput} from 'react-native'
import { Search } from 'lucide-react-native'

interface SearchBarProps {
    onPress: () => void
}



export default function SearchBar ({onPress}: SearchBarProps) {
    return (


           <View style={{flexDirection: 'row', alignItems: 'center'}}>






              <View> <Search  /></View>
               <TextInput
                   className={'bg-fuchsia-300 w-36 h-16'}
                  placeholder={'Search food...'}
                   onPress={onPress}
                   onChangeText={() => {}}
                   value={''}

               />


        </View>
    )
}