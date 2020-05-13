import React, {useState} from 'react';
import {
    View, Text, TextInput, StyleSheet, Button, ScrollView
} from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/placesActions';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');

    const dispatch = useDispatch();

    const titleChangeHandler = input => {
        //add validation
        setTitleValue(input);
    }

    const onSaveHandler = () => {
        dispatch(placesActions.addPlace(titleValue));
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text> 
                <TextInput
                    style={styles.input}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                    />
                <Button
                    title="Save"
                    color={Colors.primary}
                    onPress={onSaveHandler}
                    />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 14,
        marginBottom: 4
    },
    input: {
        borderBottomColor: "#424242",
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 4,
        fontSize: 16
    }
});

export default NewPlaceScreen;