import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MovieSearch from './screens/MovieSearch'
import Movie_Info from './screens/Movie_Info'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
            name="MovieSearch" 
            component={MovieSearch} 
            options= {{ title:'Movie Browser App',
              headerStyle: {
                backgroundColor: '#0d1419',
              },
              headerTintColor: '#cccccc',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
         />
         <Stack.Screen name = "MovieDetails" 
          component = {Movie_Info} 
          options={{ title: 'Movie Inforamtion',
              headerStyle: {
                backgroundColor: '#0d1419',
              },
              headerTintColor: '#cccccc',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}