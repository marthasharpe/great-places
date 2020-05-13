import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PlacesListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>List of Places</Text> 
           <AntDesign
                onPress={() => navigation.navigate('New Place')}
                name="plus"
                size={24}
                color="black"
              />
        </View>
    )
}

const styles = StyleSheet.create({});

export default PlacesListScreen;
