import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
    return (
        <TouchableOpacity style={styles.placeItem} onPress={props.onSelect}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.address}>{props.address}</Text> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        flexDirection: "row",
        borderColor: Colors.primary,
        borderWidth: 1,
        alignItems: "center"
    },
    image: {
        height: 30,
        width: 40
    },
    title: {
        fontSize: 16
    },
    address: {
        fontSize: 14
    }
});

export default PlaceItem;