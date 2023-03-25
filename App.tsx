import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { List } from './src/screens/List';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />

            <List />
        </GestureHandlerRootView>
    );
}
