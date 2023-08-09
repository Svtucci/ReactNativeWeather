import {
    View,
    Text,
    FlatList,
    TouchableOpacity, 
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
                    <TouchableOpacity 
                        style={{ padding: 20, borderColor: 'gray', borderBottomWidth: 1 }}
                        onPress={() => {
                            console.log('You pressed a button!')
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