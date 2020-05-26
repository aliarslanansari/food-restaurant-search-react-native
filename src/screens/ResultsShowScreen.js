import React,{useState,useEffect} from 'react';
import {TouchableOpacity,View, Text, StyleSheet, Image, ScrollView, FlatList,Linking } from 'react-native';
import zomato from "./../api/zomato"

const ResultsShowScreen = ({navigation}) =>{
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    const getResult = async (id)=>{
        const response = await zomato.get(`/restaurant?res_id=${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[])
    if(!result){
        return null;
    }else{
        return(
            <>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: result.featured_image}} style={styles.image}/>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.name}>Average Cost for Two</Text>
                <Text>{result.currency} {result.average_cost_for_two}</Text>
                <Text style={styles.name}>Cuisines</Text>
                <Text>{result.cuisines}</Text>
                <Text style={styles.name}>Timings</Text>
                <Text>{result.timings}</Text>
                <Text style={styles.name}>Address</Text>
                <Text>{result.location.address}</Text>
                <Text style={styles.name}>Rating</Text>
                <Text>{result.user_rating.aggregate_rating} Stars ({result.user_rating.rating_text})</Text>
                <Text style={styles.name}>Highlights</Text>
                <FlatList
                    data={result.highlights}
                    // horizontal={true}
                    keyExtractor={it=>it}
                    numColumns={2}
                    renderItem = {({item})=>{
                    return <Text style={{marginHorizontal:10,}}>#{item.split(" ").join("")}</Text>
                    }}
                />
                <TouchableOpacity 
                    onPress={() => Linking.openURL(result.url)}
                >
                    <Text style={{...styles.name,fontSize:20, width:140, color:'blue'}}>
                        See on Zomato
                    </Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
            </>
        );
    }
}; 

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
    },
    image:{
        width:'auto',
        height:200,
        borderRadius:4,
        marginVertical:5,
        flex:1
    },
    name:{
        fontWeight:'bold',
        marginTop:5
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'blue'
    },
})

export default ResultsShowScreen;