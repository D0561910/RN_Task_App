/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StatusBar, ScrollView, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const colors = {
  themeColor: '#4263ec',
  white: '#fff',
  background: '#f4f6fc',
  greyish: '#a4a4a4',
  tint: '#2b49c3',
};

const tasks = [
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '#008b8b',
    stamp: 'Today . 8pm',
  },
  {
    task: 'Meet with HR',
    icon: 'account-tie',
    theme: '#37003c',
    stamp: 'Today . 12 noon',
  },
  {
    task: 'Shopping with family',
    icon: 'cart',
    theme: '#008b8b',
    stamp: 'Tomorrow . 3pm',
  },
  {
    task: 'Time for Gym',
    icon: 'weight',
    theme: '#008b8b',
    stamp: 'Saturday . 4pm',
  },
];

const Task = ({task, icon, theme, stamp}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: theme, marginRight: 5}}
        />
        <View>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{fontSize: 16}}>{task}</Text>
          <Text style={{color: colors.greyish}}>{stamp}</Text>
        </View>
      </View>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{color: theme}}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: theme, marginLeft: 5}}
        />
      </View>
    </View>
  );
};

export default function TaskApp({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: colors.themeColor, paddingTop: 25}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{backgroundColor: colors.themeColor}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MaterialCommunityIcons
            name="text"
            size={30}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{color: colors.white, padding: 5}}
          />
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: colors.white, padding: 5}}
            />
            {/* <Button onPress={() => navigation.navigate('Details')}> */}
            <AntDesign
              name="message1"
              size={28}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: colors.white, padding: 5}}
              onPress={() => navigation.navigate('Message')}
            />
            {/* </Button> */}
          </View>
        </View>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{padding: 16}}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{color: colors.white, fontSize: 30}}>
            {'Hello,\nCharles'}
          </Text>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{color: colors.white}}
            />
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{color: colors.white}}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{color: colors.white}}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 20,
          flexDirection: 'row',
          backgroundColor: colors.background,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: 20,
        }}>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{fontSize: 24}}>Tasks</Text>
        <AntDesign
          name="plus"
          size={40}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: colors.themeColor,
            backgroundColor: colors.backgroundColor,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView style={{backgroundColor: colors.background}}>
        {tasks.map(task => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}
