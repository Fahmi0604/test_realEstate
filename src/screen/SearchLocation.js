import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DataContext} from '../utils/DataContext';

export default function SearchLocation() {
  const {width, height} = Dimensions.get('window');
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const {location, setlocation} = useContext(DataContext);

  const data = [
    'Jakarta Utara',
    'Jakarta Timur',
    'Jakarta Barat',
    'Jakarta Pusat',
    'Bekasi',
    'Tangerang',
  ];

  return (
    <SafeAreaView>
      <Text style={{marginTop: 20, paddingLeft: '10%', fontSize: 14}}>
        Most people find:
      </Text>
      {data.map((e, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            setlocation(e);
            navigation.navigate('HomePage');
          }}
          style={{
            width: '80%',
            height: height / 10,
            marginHorizontal: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#79828B',
          }}>
          <Icon name="map-marker" color={'#282828'} size={30} />
          <Text style={{fontWeight: '500', marginLeft: 20}}>{e}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
