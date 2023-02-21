import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './hooks/useAuth';
import StackNavigatior from './StackNavigator';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StackNavigatior />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
