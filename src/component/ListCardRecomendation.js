import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ListCardRecomendation = () => {
  const data = [
    require('../images/1.jpg'),
    require('../images/2.jpg'),
    require('../images/3.jpg'),
  ];
  const {width, height} = Dimensions.get('window');

  const isCarousel = React.useRef(null);

  function Card(data) {
    return (
      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate('ListChapter', {slug: data.slug, name: data.name})
        // }
        style={{
          flex: 1,
          justifyContent: 'space-between',
          width: (width / 10) * 8,
          height: height / 5,
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

  return (
    <View style={{paddingVertical: 20}}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={({item}) => Card(item)}
        sliderWidth={width}
        itemWidth={(width / 10) * 8}
      />
    </View>
  );
};

export default ListCardRecomendation;
