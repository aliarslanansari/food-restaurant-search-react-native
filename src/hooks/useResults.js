import {useEffect,useState} from 'react';
import zomato from "./../api/zomato";


export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (term)=>{
        try{
            const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${term}`);
            setResults(response.data.restaurants);
            //console.log(response);
        }
        catch(err){
            setErrorMessage('Something Went Wrong');
        }
    };
    
    useEffect(()=>{
        searchApi('pasta');
    },[]);

    return [searchApi, results, errorMessage];
};


