import React, {useState} from 'react';
import {BottomSheet} from 'react-native-btr';
import {
  View,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomSheetStatus({visible, toggle, setstatus}) {
  const {width, height} = Dimensions.get('window');
  const data = ['Rent', 'Buy', 'Auchtion'];

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggle}
      onBackdropPress={toggle}>
      <View
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 'auto',
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* header */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: '#79828B',
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            onPress={toggle}
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="remove" color={'#79828B'} size={30} />
          </TouchableOpacity>
          <Text
            style={{
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 18,
            }}>
            Status
          </Text>
        </View>

        {/* body */}
        {data.map((e, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              setstatus(e);
              toggle();
            }}
            style={{
              width: '100%',
              height: height / 10,
              paddingLeft: '10%',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: '500'}}>{e}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </BottomSheet>
  );
}
