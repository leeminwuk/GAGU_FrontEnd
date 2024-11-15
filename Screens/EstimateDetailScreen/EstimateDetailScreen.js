import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import CheckRenderStorage from '../../Components/CheckRender/CheckRenderStorage';

const EstimateDetailScreen = ({ navigation, route }) => {
  const { estimates } = route.params;
  const item = estimates.content[0];

  const formatDate = dateString => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일'; // 기본 날짜 설정
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  const formatPrice = price => {
    return Number(price).toLocaleString('ko-KR');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.fixedContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                {formatDate(item.createdDate)} 제작된{'\n'}
                {item.furnitureName} 입니다.
              </Text>
              <View style={styles.miniTextContainer}>
                <Text style={styles.miniText}>설명</Text>
                <Text style={styles.descriptionText}>{item.description}</Text>
              </View>
              <View style={styles.miniTextContainer}>
                <Text style={styles.miniText}>가격</Text>
                <Text style={styles.priceText}>{formatPrice(item.price)}원</Text>
              </View>
            </View>
            <View style={styles.miniTextContainer}>
              <Text style={styles.miniText}>가구 평면도</Text>
            </View>
            <View style={styles.imageBox}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.furniture2DUrl }}
                  style={styles.chairImage}
                />
              </View>
            </View>
            <View style={styles.arContainer}>
              <View style={styles.miniTextContainer}>
                <Text style={styles.miniText}>3D 도면</Text>
              </View>
              <View style={{ height: 400 }}>
                <CheckRenderStorage gltfUrl={item.furnitureGltfUrl} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EstimateDetailScreen;