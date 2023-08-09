import {
    View,
    Text,
    FlatList,
    TouchableOpacity, 
} from 'react-native';
import { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native';


export default function ForeCastList() {
    // Equivalent to use history 
    const navigation = useNavigation();

    const [forecast, setForecast] = useState([
        {
            temperature: 80,
            name: 'Mostly sunny',
            number: 1,
        },
        {
            temperature: 91,
            name: 'Sunny',
            number: 2,
        }
    ]);
    return (
        <View style={{ height: '100%' }}>
            {/* Similar to .map to display data */}
            <FlatList 
                data={forecast}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={{ padding: 20, borderColor: 'gray', borderBottomWidth: 1 }}
                        onPress={() => {
                            console.log('You pressed a button!');
                            //                    name,    props 
                            navigation.navigate('Details', item);
                        }}    
                    >
                        <Text>{item.name} {item.temperature}</Text>
                    </TouchableOpacity>
                )}
                style={{ width: '100%' }}
            />
        </View>
    )
}