import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import Colors from '../constants/Colors';

const NewPlaceScreen = () => {
    const [titleValue, setTitleValue] = useState('')

    const titleChangeHandler = input => {
        //add validation
        setTitleValue(input);
    }

    const onSaveHandler = () => {

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