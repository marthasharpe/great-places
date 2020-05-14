import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = ({ navigation }) => {
    const places = useSelector(state => state.places.places);

    return (
        <View style={styles.listContainer}>
           <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                <PlaceItem
                    onSelect={() => navigation.navigate("Place Details", {
                        itemTitle: itemData.item.title,
                        placeId: itemData.item.id
                    })}
                    image={null}
                    title={itemData.item.title}
                    address={null}
                    />
                )}
                /> 
           <AntDesign
                onPress={() => navigation.navigate('New Place')}
                name="pluscircle"
                size={36}
                color={Colors.primary}
                style={styles.addButton}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    },
    addButton: {
        alignSelf: "flex-end",
        margin: 10
    }
});

export default PlacesListScreen;
