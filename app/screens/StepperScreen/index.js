import React, {Component, useEffect} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import onBoarding1 from '../../assets/carousel-images/Onboarding1.png';
import onBoarding2 from '../../assets/carousel-images/Onboarding2.png';
import onBoarding3 from '../../assets/carousel-images/Onboarding3.png';

const deviceWidth = Dimensions.get('window').width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;

const images = [onBoarding1, onBoarding2, onBoarding3];

export default App = () => {
  numItems = images.length;
  itemWidth = FIXED_BAR_WIDTH / this.numItems - (this.numItems - 1) * BAR_SPACE;
  animVal = new Animated.Value(0);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  let imageArray = [];
  images.forEach((image, i) => {
    const thisImage = <Image key={`image${i}`} source={image} />;
    imageArray.push(thisImage);
  });

  return (
    <View style={styles.container} flex={1}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: this.animVal}}}],
          {useNativeDriver: false},
        )}>
        {imageArray}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
