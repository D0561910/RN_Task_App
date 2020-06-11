import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import MessageBubble from './MessageBubble';

export default function MessageList() {
  return (
    <SafeAreaView>
      <ScrollView>
        <MessageBubble mine text="Hello World" />
        <MessageBubble text="How are you?" />
        <MessageBubble mine text="I'm fine. Thanks!!! And you?" />
        <MessageBubble text="Me too" />
      </ScrollView>
    </SafeAreaView>
  );
}
