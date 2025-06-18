import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from './screens/CoursesScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import AlertsScreen from './screens/AlertsScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const getWeekRange = () => {
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);
  start.setDate(today.getDate() - today.getDay()); 
  end.setDate(start.getDate() + 6);               

  const format = (date) =>
    `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;

  return `This Week: ${format(start)} - ${format(end)}`;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Courses') {
              iconName = 'school';
            } else if (route.name === 'Schedule') {
              iconName = 'calendar';
            } else if (route.name === 'Alerts') {
              iconName = 'notifications';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            headerLeft: () => (
              <View style={{ paddingLeft: 16 }}>
                <Image
                  source={require('./assets/sait_logo.png')}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>⋯</Text>
              </View>
            ),
            headerTitle: () => (
              <Text
                style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}
              >
                {getWeekRange()}
              </Text>
            ),
            headerTitleAlign: 'center',
          }}
        />

        <Tab.Screen
          name="Courses"
          component={CoursesScreen}
          options={{
            headerLeft: () => (
              <View style={{ paddingLeft: 16 }}>
                <Image
                  source={require('./assets/sait_logo.png')}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              </View>
            ),
            headerTitle: 'Courses',
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Alerts"
          component={AlertsScreen}
          options={{
            headerLeft: () => (
              <View style={{ paddingLeft: 16 }}>
                <Image
                  source={require('./assets/sait_logo.png')}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              </View>
            ),
            headerTitle: 'Alerts',
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
