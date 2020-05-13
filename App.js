import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from './screens/PlacesListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Great Places" component={PlacesListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;