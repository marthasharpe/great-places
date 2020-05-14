import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
    return (
        <TouchableOpacity style={styles.placeItem} onPress={props.onSelect}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        flexDirection: "row",
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        alignItems: "center",
        padding: 10
    },
    title: {
        fontSize: 16,
    },
});

export default PlaceItem;