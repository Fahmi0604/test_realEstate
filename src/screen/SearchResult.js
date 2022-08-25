import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Animated,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DataContext} from '../utils/DataContext';

export default function SearchResult() {
  const {width, height} = Dimensions.get('window');
  const isCarousel = React.useRef(null);
  const navigation = useNavigation();
  const {location, type, status} = useContext(DataContext);

  const data = [
    require('../images/1.jpg'),
    require('../images/2.jpg'),
    require('../images/3.jpg'),
  ];

  //  modal
  const [visible, setVisible] = useState(false);

  function _handleDismiss() {
    setVisible(false);
  }

  function itemImage(data) {
    return (
      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate('ListChapter', {slug: data.slug, name: data.name})
        // }
        style={{
          flex: 1,
          justifyContent: 'space-between',
          width: (width / 10) * 9,
          height: height / 4,
          borderRadius: 12,
          elevation: 1,
        }}>
        {data && (
          <Image
            // source={require('../images/1.jpg')}
            source={data}
            style={{width: '100%', height: '100%', borderRadius: 12}}
          />
        )}
      </TouchableOpacity>
    );
  }

  function Card() {
    return (
      <View style={{marginBottom: 30}}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={({item}) => itemImage(item)}
          sliderWidth={width}
          itemWidth={width}
        />

        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 12, lineHeight: 30}}>
              2 ROOMS &#8226; 1 BATH ROOM &#8226; 250M
            </Text>

            <Text style={{fontSize: 8, lineHeight: 18}}>2</Text>
          </View>

          <Text style={{fontSize: 16, fontWeight: '700'}}>
            Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian
          </Text>

          <Text style={{marginTop: 10}}>Rp 800 Juta</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={{padding: '5%'}}>
      <Text style={{marginBottom: 30}}>
        13212 Homes found at Jakarta Selatan
      </Text>

      {[...Array(5).keys()].map((e, i) => (
        <Card key={i} />
      ))}

      {/* Modal filter */}
      <Modal
        animated
        animationType="fade"
        visible={visible}
        transparent
        onRequestClose={_handleDismiss}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <Animated.View
            style={{
              backgroundColor: 'white',
              padding: 12,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}>
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
                  <Text
                    style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                    Pick Location
                  </Text>
                  <Text
                    style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
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
                  onPress={() => navigation.navigate('FilterType')}
                  style={{
                    width: '80%',
                    color: '#282828',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                  }}>
                  <Text
                    style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                    Type of Property
                  </Text>
                  <Text
                    style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
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
                  onPress={() => navigation.navigate('FilterStatus')}
                  style={{
                    width: '80%',
                    color: '#282828',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                  }}>
                  <Text
                    style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                    Status
                  </Text>
                  <Text
                    style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
                    {status}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => setVisible(false)}
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
          </Animated.View>
        </View>
      </Modal>

      <View style={{position: 'absolute', bottom: 0, zIndex: 1000}}>
        <Text>test</Text>
      </View>
    </ScrollView>
  );
}
