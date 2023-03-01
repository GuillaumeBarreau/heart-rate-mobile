import { View } from "react-native";
import { Card, Layout, List, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import data from "../../data/data.json"
import { HeartRateSvgAnimateComponent } from "../HeartRateSvgAnimateComponent/HeartRateSvgAnimateComponent";

export const ListHeartScreen = () => {

  const renderItem = ({ item, index }) => {

    return  (
        <Layout style={styles.cardContainer} level='1'>
            <Card style={styles.card} status='basic'>
              <View style={styles.headerContainer}>
                <Text category='h4'  style={styles.headerContainer_title}>{item.name}</Text>
                <View style={styles.headerContainer_contentTop}>
                  {/* <View style={styles.headerContainer_contentTop__fadeIn}></View> */}
                  <HeartRateSvgAnimateComponent item={item}/>
                </View>
                <View style={styles.headerContainer_contentBottom}>
                    {/* <Text category='s1' style={styles.headerContainer_contentBottom_description}>Heart rate</Text> */}
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
    padding: 8,
    borderRadius: 8,
  },
  headerContainer_content: {
    justifyContent: "space-between",
  },
  headerContainer_contentTop: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  headerContainer_contentTop__fadeIn: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  headerContainer_contentBottom: {
      marginTop: 12,
      flexDirection: "row",
      justifyContent: "flex-end",
  },
  headerContainer_title: {
    marginLeft: 0,
    textAlign: "center",
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
  },
});

