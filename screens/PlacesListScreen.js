import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const PlacesListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>List of Places</Text> 
           <AntDesign
                onPress={() => navigation.navigate('New Place')}
                name="plus"
                size={24}
                color={Colors.primary}
              />
        </View>
    )
}

const styles = StyleSheet.create({});

export default PlacesListScreen;
