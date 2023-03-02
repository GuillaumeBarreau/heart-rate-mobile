import { View, Dimensions } from "react-native";
import { Card, Layout, List, Text, Avatar } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import data from "../../data/data.json"
import {  HeartRateSvgAnimateContainer } from "../../components/HeartRateSvgAnimate";
import { ImportImage } from "../../components/ImportImage";

const win = Dimensions.get('window');
export const ListHeartScreen = ({navigation}) => {

  const renderItem = ({ item, index }) => {
    const navigationToDetailsScreen = () => {
      navigation.navigate('Details')
    }
  
  const sourceImage = ImportImage.GetImage(
    `${item.name.toLowerCase()}`,
  );

    return (
        <Layout style={styles.cardContainer} level='1' >
            <Card style={styles.card} onPress={navigationToDetailsScreen} >
              <View style={styles.headerContainer}>
                <View style={styles.headerContainer_contentTop}>
                  <View style={styles.headerContainer_contentTop__animate}>
                    <HeartRateSvgAnimateContainer item={item}/>
                  </View>
                  <Image 
                    style={styles.headerContainer_contentTop__image} 
                    source={sourceImage}
                  /> 
                  <View style={styles.headerContainer_contentTop__textContainer}>
                    <Text category='h4'  style={styles.headerContainer_contentTop__textContainer_title}>{item.name}</Text>
                  </View>
                </View>
                {/* <HeartRateSvgAnimateContainer item={item}/> */}
                <View style={styles.headerContainer_contentBottom}>
                    <Text category='h3' style={styles.headerContainer_contentBottom_description}>{item.fcm} <Text  appearance='hint' category='s1'>BPM</Text></Text>
                </View>
                </View>
            </Card>
        </Layout>
    )
  }

  return (
    <List
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: "relative",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
  },
  headerContainer_content: {
    justifyContent: "space-between",
  },
  headerContainer_contentTop: {
    // overflow: "hidden",
    alignSelf: "center",
    borderRadius: 100,
    width: 200,
  },
  headerContainer_contentTop__image: {
    width: 200,
    height: 200, 
    borderRadius: 100,
    alignSelf: "center"
  },
  headerContainer_contentTop__animate: {
    position: "relative",
    width: 200,
    borderRadius: 100,
    backgroundColor: "red"
  },
  headerContainer_contentTop__textContainer: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  headerContainer_contentBottom: {
      marginTop: 12,
      flexDirection: "row",
      justifyContent: "flex-end",
  },
  headerContainer_contentCenter: {
      justifyContent: "flex-end",
  },
  headerContainer_contentTop__textContainer_title: {
    position: "absolute",
    textAlign: "center",
    marginLeft: 0,
    width: "100%",
    top: 140,
    backgroundColor: "white",
  },
  headerContainer_contentBottom_description: {
    textAlign: "left",
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 16,
    borderRadius: 12,
    display: "flex",
    backgroundColor: "white",
  },
});

