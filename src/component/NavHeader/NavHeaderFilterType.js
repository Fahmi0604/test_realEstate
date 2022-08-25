import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NavHeaderFilterType({title}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f7f6fd',
        // justifyContent: 'space-between',
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#79828B',
      }}>
      <TouchableOpacity
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: 0.5,
          borderRightColor: '#79828B',
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="remove" color={'#79828B'} size={30} />
      </TouchableOpacity>
      <View style={{width: '80%', justifyContent: 'center', paddingLeft: 20}}>
        <Text>Type of Property</Text>
      </View>
    </View>
  );
}
