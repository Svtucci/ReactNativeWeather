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
        <View>
            <Text>
                List Goes Here...
            </Text>
            {/* Similar to .map to display data */}
            <FlatList 
                data={forecast}
                renderItem={({item}) => (
                    <>
                        <Text>
                            {item.name} {item.temperature}
                        </Text>
                    </>
                )}
            />
        </View>
    )
}