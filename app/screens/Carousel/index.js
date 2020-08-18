import Carousel, {Pagination} from 'react-native-snap-carousel';
import onBoarding1 from '../../assets/carousel-images/Onboarding1.png';
import onBoarding2 from '../../assets/carousel-images/Onboarding2.png';
import onBoarding3 from '../../assets/carousel-images/Onboarding3.png';
import React, {Component, useState, useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default MyCarousel = (props) => {
  console.log('props', props);
  [entries, setEntries] = useState([onBoarding1, onBoarding2, onBoarding3]);
  [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({item, index}) => {
    return <MySlideComponent data={item} />;
  };

  useEffect(() => {
    SplashScreen.hide();
  });

  const redirectNextScreen = (index) => {
    if (index === 2) {
      props.navigation.navigate('Login');
    }
  };
  const pagination = (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 30,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor: '#EE4E7C',
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: '#EE4E7C',
      }}
      animatedTension={50}
      animatedDuration={500}
      animatedFriction={2}
      inactiveDotOpacity={0.9}
      inactiveDotScale={0.9}
    />
  );

  const deviceWidth = Dimensions.get('window').width;
  return (
    <View>
      <Carousel
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => redirectNextScreen(index)}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth}
      />
      {/* {pagination} */}
    </View>
  );
};

const MySlideComponent = ({data}) => {
  console.log('###', data);
  return <Image source={data} />;
};
