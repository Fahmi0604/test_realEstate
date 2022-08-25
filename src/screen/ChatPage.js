import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ChatPage() {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: (height / 10) * 9.5,
        }}>
        <Image source={require('../images/moon.png')} />
        <Text style={{color: '#42505C', fontSize: 20, marginVertical: 20}}>
          Landlord Offline
        </Text>
        <Text style={{width: width / 2, textAlign: 'center'}}>
          Lorem ipsum dolor sit amet consecteur adipsing elit
        </Text>
      </View>

      {/* Bottom sheet */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#F3F3F3',
          zIndex: 1000,
          height: (height / 10) * 1,
          width: width,
          flexDirection: 'row',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 5,
        }}>
        <View
          // onPress={() => setVisible(true)}
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 20,
          }}>
          <TextInput
            style={{
              paddingLeft: 20,
              height: 40,
              backgroundColor: 'white',
              borderRadius: 1000,
            }}
            placeholder="Type Message.."
          />
        </View>
        <View
          style={{
            width: '20%',
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
            }}>
            <Icon
              name="send-o"
              color={'#282828'}
              size={30}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
