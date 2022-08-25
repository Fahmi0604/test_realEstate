import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NavHeaderChat({title}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        height: 50,
        elevation: 1,
      }}>
      <TouchableOpacity
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" color={'#79828B'} size={30} />
      </TouchableOpacity>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text>&#8226; Shahrul M</Text>

        <Icon name="ellipsis-v" color={'#79828B'} size={30} />
      </View>
    </View>
  );
}
