// Import Modules
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Import Screen View
import TaskApp from './src/Components/TaskApp';
import MessageList from './src/Components/ChatRoom/MessageList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TaskApp"
          component={TaskApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={MessageList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
