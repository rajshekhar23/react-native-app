import Carousel, {Pagination} from 'react-native-snap-carousel';
import onBoarding1 from '../../assets/images/onBoarding1.png';
import onBoarding2 from '../../assets/images/onBoarding2.png';
import onBoarding3 from '../../assets/images/onBoarding3.png';
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Text, IconButton} from 'react-native-paper';
import Colors from '../../constants/index';
import ARROW_ICON from '../../assets/images/arrow.svg';

export default MyCarousel = (props) => {
  [entries, setEntries] = useState([onBoarding2, onBoarding3, onBoarding1]);
  [activeSlide, setActiveSlide] = useState(0);

  let dimensions = Dimensions.get('window');
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;

  useEffect(() => {
    SplashScreen.hide();
  });

  const redirectNextScreen = (index) => {
    setActiveSlide(index);
  };

  const pagination = (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      containerStyle={{
        marginBottom: 30,
      }}
      dotStyle={{
        width: 30,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -2,
        backgroundColor: '#EE4E7C',
      }}
      inactiveDotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -2,
        backgroundColor: '#C4C4C4',
      }}
      animatedTension={50}
      animatedDuration={500}
      animatedFriction={2}
      inactiveDotOpacity={0.9}
      inactiveDotScale={0.9}
    />
  );

  const _renderItem = ({item, index}) => {
    return (
      <>
        <Image
          source={item}
          resizeMode="cover"
          style={{marginTop: 60, alignSelf: 'center'}}
        />
        <Text style={styles.imageText}>Hello</Text>
      </>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => redirectNextScreen(index)}
        sliderWidth={imageWidth}
        itemWidth={imageWidth}
      />
      <IconButton
        icon={ARROW_ICON}
        color={Colors.RIGHT_ARROW}
        size={40}
        onPress={() => console.log('Pressed')}
      />
      {pagination}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbContainer: {
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
  imageText: {marginTop: 30},
});
