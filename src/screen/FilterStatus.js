import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FilterStatus() {
  const {width, height} = Dimensions.get('window');
  const [text, setText] = useState('');
  const data = ['Rent', 'Buy', 'Auchtion'];

  return (
    <SafeAreaView>
      {data.map((e, i) => (
        <TouchableOpacity
          key={i}
          //   onPress={() => {
          //     handleSetSearch(e);
          //   }}
          style={{
            width: '80%',
            height: height / 10,
            marginHorizontal: '10%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '500', marginLeft: 20}}>{e}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
