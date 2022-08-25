import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import './ignoreWrnings';

import Home from './src/screen/Home';
import SearchLocation from './src/screen/SearchLocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavHeaderSearchLocation from './src/component/NavHeader/NavHeaderSearchLocation';
import SearchResult from './src/screen/SearchResult';
import NavHeaderSearchResult from './src/component/NavHeader/NavHeaderSearchResult';
import FilterType from './src/screen/FilterType';
import NavHeaderFilterType from './src/component/NavHeader/NavHeaderFilterType';
import FilterStatus from './src/screen/FilterStatus';
import NavHeaderFilterStatus from './src/component/NavHeader/NavHeaderFilterStatus';
import {DataProvider} from './src/utils/DataContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#42505C',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // height: '7.5%',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon
              name={'search'}
              color={color}
              size={size}
              style={
                {
                  // backgroundColor: '#79828B',
                  // padding: '5%',
                  // borderRadius: 1000,
                }
              }
            />
          ),
        }}
        name="Search"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'comments'} color={color} size={size} />
          ),
        }}
        name="Chat"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'list'} color={color} size={size} />
          ),
        }}
        name="Category"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'history'} color={color} size={size} />
          ),
        }}
        name="History"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'user'} color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Home}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{headerTransparent: true}}
          screenOptions={{
            headerStyle: {backgroundColor: '#f7f6fd'},
            headerShadowVisible: false,
            headerTitle: '',
          }}
          // screenOptions={{headerShown: false}}
          initialRouteName="HomePage">
          <Stack.Screen
            options={{headerShown: false}}
            name="HomePage"
            component={HomePage}
          />
          <Stack.Screen
            options={{
              header: NavHeaderSearchLocation,
            }}
            name="SearchLocation"
            component={SearchLocation}
          />
          <Stack.Screen
            options={{
              header: NavHeaderSearchResult,
            }}
            name="SearchResult"
            component={SearchResult}
          />
          <Stack.Screen
            options={{
              header: NavHeaderFilterType,
            }}
            name="FilterType"
            component={FilterType}
          />
          <Stack.Screen
            options={{
              header: NavHeaderFilterStatus,
            }}
            name="FilterStatus"
            component={FilterStatus}
          />
          {/* <Stack.Screen name="ListHadits" component={ListHadits} /> */}
          {/* <Stack.Screen name="DetailHadits" component={DetailHadits} /> */}
        </Stack.Navigator>

        {/* <MyTabs /> */}
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
