import {
    View,
    Text,
    FlatList,
    TouchableOpacity, 
} from 'react-native';
import React, { useEffect, useState } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location'; 


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
    const [location, setLocation] = useState();

    useEffect(() => {
        getLocation();
    }, [])

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('permission not granted'); 
            return; 
        }
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
    }
    // 
    return (
        <View style={{ height: '100%' }}>
            <Text>{JSON.stringify(location)}</Text>
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