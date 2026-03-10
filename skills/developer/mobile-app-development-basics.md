---
name: mobile-app-development-basics
description: >
  Guides developers through building cross-platform mobile applications using React Native or Expo. Use when someone wants to create a mobile app, asks about React Native setup, needs help structuring a mobile project, wants to build for iOS and Android simultaneously, or asks how to get started with mobile development.
category: developer
tags: [react-native, mobile, expo, ios, android, cross-platform]
author: community
---

# Mobile App Development Basics

This skill walks developers through scaffolding, structuring, and building cross-platform mobile apps with React Native or Expo, covering setup through core component patterns.

## Mobile App Development Workflow

### 1. Clarify the Project Scope
- Ask: target platforms (iOS, Android, or both), preferred toolchain (Expo managed vs bare React Native), and whether they need native modules
- Recommend **Expo** for beginners or rapid prototyping; bare **React Native CLI** for apps requiring deep native integration

### 2. Project Initialization
**Expo (recommended for most cases):**
```bash
npx create-expo-app MyApp --template blank-typescript
cd MyApp
npx expo start
```

**React Native CLI:**
```bash
npx react-native@latest init MyApp --template react-native-template-typescript
cd MyApp
npx react-native run-android  # or run-ios
```

### 3. Project Structure
Enforce this folder layout from the start:
```
/src
  /components    # Reusable UI components
  /screens       # Full-screen views
  /navigation    # React Navigation config
  /hooks         # Custom hooks
  /store         # State management (Zustand, Redux, etc.)
  /services      # API calls, device APIs
  /utils         # Helpers and constants
  /assets        # Images, fonts
App.tsx          # Entry point
```

### 4. Navigation Setup
Install and configure React Navigation:
```bash
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

Basic stack navigator pattern:
```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### 5. Core Component Patterns
- Use `View`, `Text`, `TextInput`, `TouchableOpacity`, `FlatList`, `ScrollView` — never raw HTML elements
- Style with `StyleSheet.create()` for performance; avoid inline styles in render
- Handle safe areas with `<SafeAreaView>` or `useSafeAreaInsets()`
- Use `Platform.OS` to branch iOS/Android-specific logic

```tsx
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? 20 : 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
  },
});
```

### 6. State Management Recommendations
| App Size | Recommendation |
|---|---|
| Small | `useState` + `useContext` |
| Medium | Zustand |
| Large | Redux Toolkit or Jotai |

### 7. Common Native Features
Provide implementation stubs for whichever the user needs:
- **Camera**: `expo-camera` or `react-native-vision-camera`
- **Location**: `expo-location`
- **Push Notifications**: `expo-notifications`
- **Storage**: `@react-native-async-storage/async-storage`
- **Networking**: `fetch` or `axios` with proper error handling

### 8. Performance Rules
- Always use `FlatList` (not `ScrollView`) for