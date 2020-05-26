import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';

const NoImage = 'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg';

const ResultsDetail = ({result}) =>{
    return <View style={styles.container}>
        <Image 
            style={styles.imageStyle}
            source={{uri: result.restaurant.thumb?result.restaurant.thumb: NoImage }}
        />
        <Text style={styles.nameStyle}>{result.restaurant.name}</Text>
<Text>{result.restaurant.user_rating.aggregate_rating} Stars, {result.restaurant.all_reviews_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15 
    },
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5

    },
    nameStyle:{
        fontWeight:'bold'
    }
});

export default ResultsDetail;