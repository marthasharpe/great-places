import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

function PlacesNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // set header styles across every screen here
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="My Places"
          component={PlacesListScreen}
          options={{
            headerTitle: "My Places",
          }}
        />
        <Stack.Screen name="Place Details" component={PlaceDetailsScreen} />
        <Stack.Screen name="New Place" component={NewPlaceScreen} />
        <Stack.Screen name="Place Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PlacesNavigator;