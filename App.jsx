import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/dashboard';
import IncomeComponent from './components/Income';
import AddTransaction from './components/AddTransaction';
import ProfileComponent from './components/profile';

import TransactionHistory from './components/TransactionHistory'; // Import TransactionHistory
import { FinanceProvider } from './components/FinanceContext';

const Stack = createStackNavigator();

function App() {
  return (
    <FinanceProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Expenses"
            component={AddTransaction}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Income"
            component={IncomeComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Transaction"
            component={TransactionHistory}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FinanceProvider>
  );
}

export default App;
