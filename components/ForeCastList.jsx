import {
    View,
    Text,
    FlatList,
} from 'react-native';
import { useState } from 'react'; 

export default function ForeCastList() {
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
                    <>
                    <View style={{ padding: 20, borderColor: 'gray', borderBottomWidth: 1 }}>
                        <Text>{item.name} {item.temperature}</Text>
                    </View>
                    </>
                )}
                style={{ width: '100%' }}
            />
        </View>
    )
}