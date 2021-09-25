import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/context';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { List } from './src/pages/List';
import { EditTodo } from './src/pages/EditTodo';

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="List" component={List} />
        <stack.Screen name="EditTodo" component={EditTodo} />
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}