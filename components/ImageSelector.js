import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = () => {

    const takeImageHandler = () => {
        ImagePicker.launchCameraAsync();
    }

    return (
        <View style={styles.imageContainer}>
            <View style={styles.imagePreview}>
                <Text>No image picked yet.</Text>
                <Image style={styles.image}/>
            </View>
            <Button
                title="Take Image"
                color={Colors.primary}
                onPress={takeImageHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center"
    },
    imagePreview: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ImageSelector;