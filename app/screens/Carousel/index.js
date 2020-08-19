import Carousel, {Pagination} from 'react-native-snap-carousel';
import onBoarding1 from '../../assets/images/onBoarding1.png';
import onBoarding2 from '../../assets/images/onBoarding2.png';
import onBoarding3 from '../../assets/images/onBoarding3.png';
import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Dimensions, Alert} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Text, IconButton, Button} from 'react-native-paper';
import Colors from '../../constants/index';
import ARROW_ICON from '../../assets/images/arrow.svg';

export default MyCarousel = (props) => {
  [entries, setEntries] = useState([
    {
      image: onBoarding1,
      text: 'Give Discounts, Build Relationships',
      isSkip: true,
    },
    {
      image: onBoarding2,
      text: 'More scans means more reach to users.',
      isSkip: true,
    },
    {
      image: onBoarding3,
      isSkip: false,
      text:
        'To boost your reach, we send email, SMS and notification to the selective customers. ',
    },
  ]);
  [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  let dimensions = Dimensions.get('window');
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

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const _renderItem = ({item, index}) => {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('Login')}
          mode="text"
          color="#1F1F1F"
          style={styles.skip}>
          Skip
        </Button>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{marginTop: 150, alignSelf: 'center'}}
        />
        <Text style={styles.imageText}>{item.text}</Text>
        {item.isSkip ? (
          <IconButton
            icon="arrow-right"
            color={Colors.WHITE}
            size={30}
            style={styles.arrowButton}
            onPress={goForward}
          />
        ) : (
          <Button
            onPress={() => props.navigation.navigate('Login')}
            mode="contained"
            uppercase={false}
            labelStyle={{color: Colors.WHITE}}
            color={Colors.RIGHT_ARROW}
            style={styles.getStartedButton}>
            Get Started
          </Button>
        )}
      </>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        ref={carouselRef}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => redirectNextScreen(index)}
        sliderWidth={imageWidth}
        itemWidth={imageWidth}
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
  skip: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    position: 'absolute',
    right: 20,
    top: 60,
  },
  getStartedButton: {
    alignSelf: 'center',
    marginTop: 50,
    shadowColor: Colors.RIGHT_ARROW,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1.0,
    shadowRadius: 13,
    elevation: 10,
  },
  imageText: {
    marginTop: 80,
    width: 300,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: '#1F1F1F',
  },
  arrowButton: {
    borderRadius: 50,
    alignSelf: 'center',
    width: 40,
    fontWeight: '100',
    marginTop: 50,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {width: 300, height: 300},
    height: 40,
    shadowColor: '#000',
    fontSize: 12,
    backgroundColor: Colors.RIGHT_ARROW,
    shadowColor: Colors.RIGHT_ARROW,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1.0,
    shadowRadius: 13,
    elevation: 10,
  },
});
