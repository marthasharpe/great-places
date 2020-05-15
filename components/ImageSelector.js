import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImageSelector = props => {

    const [selectedImage, setSelectedImage] = useState()

    const getPermissions = async () => {
        const result = await Permissions.askAsync(
            Permissions.CAMERA, Permissions.CAMERA_ROLL
        );
        if (result.status !== "granted") {
            Alert.alert(
                'You denied camera access.',
                'Approve access to take a picture.',
                [{text: 'Okay'}]
            );
            return false;
        }
        return true;
    };

    const takeImageHandler = async () => {
        const hasPermission = await getPermissions();
        if (!hasPermission) return;
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        setSelectedImage(image.uri);
        props.onImageTaken(image.uri);
    };

    return (
        <View style={styles.imageContainer}>
            <View style={styles.imagePreview}>
                {!selectedImage ? <Text>No image picked yet.</Text>
                : <Image style={styles.image} source={{uri: selectedImage}}/>}
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
        alignItems: "center",
        marginBottom: 10
    },
    imagePreview: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 10
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ImageSelector;