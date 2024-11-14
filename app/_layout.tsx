import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import { Stack } from 'expo-router'

import {
  configureReanimatedLogger,
  ReanimatedLogLevel
} from 'react-native-reanimated'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '../global.css'

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false // Reanimated runs in strict mode by default
})

// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
