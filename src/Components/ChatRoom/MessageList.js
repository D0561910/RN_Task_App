import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import MessageBubble from './MessageBubble';

export default function MessageList() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#4263ec'}}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{height: '100%', backgroundColor: '#4263ec'}}>
        <ScrollView>
          <MessageBubble mine text="Hello World" />
          <MessageBubble text="How are you?" />
          <MessageBubble mine text="I'm fine. Thanks!!! And you?" />
          <MessageBubble text="Me too" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
