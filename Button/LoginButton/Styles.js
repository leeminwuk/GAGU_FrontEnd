import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  googleButton: {
    width: width * 0.887,
    height: 52,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 12,
    color: '#4a4a4a',
    backgroundColor: '#ffffff',
    shadowColor: '#9b9b9b',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  googleText: {
    color: '#000000',
    textAlign: 'center',
    marginRight: 34,
  },
  kakaoButton: {
    width: width * 0.887,
    height: 52,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 12,
    color: '#4a4a4a',
    backgroundColor: '#Fee500',
    shadowColor: '#9b9b9b',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  kakaoIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  kakaoText: {
    color: '#000000',
    textAlign: 'center',
    marginRight: 34,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  mainText: {
    fontWeight: '900',
    fontSize: 30,
    color: '#ffffff',
  },
  sideTextBox: {
    marginTop: 40,
  },
  sideText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 14,
    letterSpacing: -0.5,
  },
  startButton: {
    marginTop: 140,
    marginLeft: 12,
  },
  startText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.5,
    marginLeft: 8,
  },
  startArrow: {
    width: width * 0.7,
    height: 2,
    backgroundColor: '#ffffff',
    marginTop: -20,
  },
  startArrowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightArrow: {
    marginLeft: -80,
    marginTop: -20,
  },
  arrowCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    marginTop: -20,
    marginLeft: -30,
  },
});
export default styles;