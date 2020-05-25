import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () =>{
    return <View style={styles.backgroundStyle  }>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput placeholder='Search' style={styles.inputStyle}/>
    </View>
}; 

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#f0eeee', 
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row",
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:10
    }
});

export default SearchBar;