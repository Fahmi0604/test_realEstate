import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import ListCardRecomendation from '../component/ListCardRecomendation';
import {useNavigation} from '@react-navigation/native';

export default function DetailPage() {
  const {width, height} = Dimensions.get('window');
  const isCarousel = React.useRef(null);
  const data = [
    require('../images/1.jpg'),
    require('../images/2.jpg'),
    require('../images/3.jpg'),
  ];
  const navigation = useNavigation();

  function itemImage(data) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'space-between',
          width: width,
          height: height / 4,
          borderRadius: 12,
          elevation: 1,
        }}>
        {data && (
          <Image
            source={data}
            style={{width: '100%', height: '100%', borderRadius: 12}}
          />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#f7f6fd'}}>
        <View style={{marginTop: 30, backgroundColor: '#f7f6fd'}}>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 10, right: 10, top: 10}}>
            <Icon name="heart" color={'#fefefe'} size={30} />
          </TouchableOpacity>

          <Carousel
            ref={isCarousel}
            data={data}
            renderItem={({item}) => itemImage(item)}
            sliderWidth={width}
            itemWidth={width}
          />

          <View style={{paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{fontSize: 12, lineHeight: 30}}>
                2 ROOMS &#8226; 1 BATH ROOM &#8226; 250M
              </Text>

              <Text style={{fontSize: 8, lineHeight: 18}}>2</Text>
            </View>

            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian
            </Text>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 30,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 40,
                    backgroundColor: '#E4E4E4',
                    borderRadius: 1000,
                  }}>
                  Detail
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 1000,
                  }}>
                  Map
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 1000,
                  }}>
                  Loan
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Type of Property
              </Text>
              <Text style={{color: '#282828', fontSize: 16, fontWeight: '600'}}>
                House
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Status
              </Text>
              <Text style={{color: '#282828', fontSize: 16, fontWeight: '600'}}>
                Rent
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Certification
              </Text>
              <Text style={{color: '#282828', fontSize: 16, fontWeight: '600'}}>
                SHM
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Area
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    lineHeight: 30,
                    color: '#282828',
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  250M
                </Text>

                <Text
                  style={{
                    lineHeight: 18,
                    color: '#282828',
                    fontSize: 12,
                    fontWeight: '600',
                  }}>
                  2
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Building Size
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    lineHeight: 30,
                    color: '#282828',
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  300M
                </Text>

                <Text
                  style={{
                    lineHeight: 18,
                    color: '#282828',
                    fontSize: 12,
                    fontWeight: '600',
                  }}>
                  2
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Full Furnished
              </Text>
              <Text style={{color: '#282828', fontSize: 16, fontWeight: '600'}}>
                Yes
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Garage
              </Text>
              <Text style={{color: '#282828', fontSize: 16, fontWeight: '600'}}>
                Yes
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                color: '#282828',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginHorizontal: '5%',
                marginBottom: 20,
              }}>
              <Text style={{color: '#282828', fontSize: 12, marginBottom: 5}}>
                Cartport
              </Text>
              <Text style={{color: '#282828', fontSize: 16, fontWeight: '600'}}>
                Not Available
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#E4E4E4',
            flexDirection: 'row',
            padding: 30,
          }}>
          <View style={{width: '70%'}}>
            <Text style={{color: '#42505C'}}>See loan options. start from</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginTop: 10,
              }}>
              <Text style={{color: '#42505C', fontSize: 18}}>
                Rp 1.2 Juta /
              </Text>
              <Text> bulan</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                backgroundColor: '#42505C',
                borderRadius: 1000,
                paddingHorizontal: 30,
                paddingVertical: 15,
                color: 'white',
              }}>
              Loan
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f7f6fd',
            padding: 20,
            elevation: 1,
          }}>
          <Image
            source={require('../images/profile.png')}
            style={{
              width: (width / 10) * 2,
              height: (width / 10) * 2,
            }}
          />

          <View style={{width: (width / 10) * 8, paddingLeft: 20}}>
            <Text style={{fontSize: 16}}>Shahrul M &#8226; Landlord</Text>
            <Text style={{fontSize: 10}}>Last Online : 1 hour ago</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#f7f6fd',
            marginTop: 50,
            marginBottom: height / 12,
          }}>
          <Text style={{fontWeight: '500', paddingLeft: 20}}>
            Property near Jakarta Selatan
          </Text>

          <ListCardRecomendation />
        </View>
      </ScrollView>

      {/* Bottom sheet */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          height: height / 12,
          width: width,
          flexDirection: 'row',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          // onPress={() => setVisible(true)}
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 30,
          }}>
          <Text>price start from : </Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Rp 800 Juta</Text>
        </View>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChatPage')}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#79828B',
              padding: 7.5,
              borderRadius: 10,
            }}>
            <Icon2
              name="message-square"
              color={'white'}
              size={30}
              style={{marginRight: 10}}
            />
            <Text style={{color: 'white'}}>Contact Landlord</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
