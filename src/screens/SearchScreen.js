import React,{useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "./../components/SearchBar";
import useResults from "./../hooks/useResults";
import ResultsList from "./../components/ResultsList";

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price)=>{
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    };

    return(
    <>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm )}
            onTermSubmit={()=>searchApi(term)}
        />
            
        {errorMessage?<Text>{errorMessage}</Text>:null}
        {/* <Text>we have found {results.length} results</Text> */}
        <ScrollView>
        <ResultsList 
            title='Cost Effective' 
            results={filterResultsByPrice(2)}
        />
        <ResultsList 
            title='Bit Pricier' 
            results={filterResultsByPrice(3)}
        />
        <ResultsList 
            title="Big Spender" 
            results={filterResultsByPrice(4)}
        />
        </ScrollView>
    </>
    ) 
};

const styles = StyleSheet.create({

});

export default SearchScreen;