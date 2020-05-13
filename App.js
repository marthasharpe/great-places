import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from './screens/PlacesListScreen';
import PlaceDetailsScreen from './screens/PlaceDetailsScreen';
import NewPlaceScreen from './screens/NewPlaceScreen';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // set header styles across every screen here
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4287f5',
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

export default App;