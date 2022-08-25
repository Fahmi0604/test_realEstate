import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListCard from '../component/ListCard';
import {BottomSheet} from 'react-native-btr';
import BottomSheetType from '../component/BottomSheetType';
import {useNavigation} from '@react-navigation/native';
import BottomSheetStatus from '../component/BottomSheetStatus';

import {DataContext} from '../utils/DataContext';

const Home = () => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const {location, setlocation, type, settype, status, setstatus} =
    useContext(DataContext);

  // const [pilihanType, setpilihanType] = useState('Home');
  // const [pilihanStatus, setpilihanStatus] = useState('Rent');

  const [visibleBottomType, setVisibleBottomType] = useState(false);
  const [visibleBottomStatus, setVisibleBottomStatus] = useState(false);

  function toggleBottomType() {
    setVisibleBottomType(visible => !visible);
  }

  function toggleBottomStatus() {
    setVisibleBottomStatus(visible => !visible);
  }

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#f7f6fd'}}>
        <StatusBar backgroundColor={'#f7f6fd'} barStyle="dark-content" />

        {/* header */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 40,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: '#282828', fontWeight: '700'}}>
            REAL ESTATE FINDER
          </Text>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingRight: 15}}>
              <Icon name="bell" color={'#282828'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="heart" color={'#282828'} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* <ListCard /> */}
        <ListCard />

        <View style={{marginTop: 40}}>
          {/* location */}
          <View
            style={{
              width: '80%',
              marginHorizontal: '10%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="map-marker"
                color={'#282828'}
                size={35}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchLocation')}
              style={{
                width: '80%',
                color: '#282828',
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Pick Location
              </Text>
              <Text style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
                {location}
              </Text>
            </TouchableOpacity>
          </View>
          {/* type */}
          <View
            style={{
              width: '80%',
              marginHorizontal: '10%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <View
              style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="home"
                color={'#282828'}
                size={35}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={toggleBottomType}
              style={{
                width: '80%',
                color: '#282828',
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Type of Property
              </Text>
              <Text style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
                {type}
              </Text>
            </TouchableOpacity>
          </View>
          {/* status */}
          <View
            style={{
              width: '80%',
              marginHorizontal: '10%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <View
              style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="check"
                color={'#282828'}
                size={35}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={toggleBottomStatus}
              style={{
                width: '80%',
                color: '#282828',
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Status
              </Text>
              <Text style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
                {status}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SearchResult')}
            style={{
              backgroundColor: '#42505C',
              display: 'flex',
              alignItems: 'center',
              paddingVertical: '3%',
              borderRadius: 10000,
              marginHorizontal: 40,
              marginVertical: 40,
            }}>
            <Text style={{color: 'white'}}>FIND</Text>
          </TouchableOpacity>
        </View>

        <BottomSheetType
          visible={visibleBottomType}
          toggle={toggleBottomType}
          settype={e => settype(e)}
        />

        <BottomSheetStatus
          visible={visibleBottomStatus}
          toggle={toggleBottomStatus}
          setstatus={e => setstatus(e)}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
