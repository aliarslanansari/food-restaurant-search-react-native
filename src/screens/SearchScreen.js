import React,{useState, useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "./../components/SearchBar";
import zomato from "./../api/zomato";
import useResults from "./../hooks/useResults";
import ResultsList from "./../components/ResultsList";

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log(results);

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm )}
            onTermSubmit={()=>searchApi(term)}
        />
            
        {errorMessage?<Text>{errorMessage}</Text>:null}
        <Text>we have found {results.length} results</Text>
        <ResultsList title='Cost Effective'/>
        <ResultsList title='Bit Pricier'/>
        <ResultsList title="Big Spender"/>
    </View>
};

const styles = StyleSheet.create({

});

export default SearchScreen;