// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
// import CocktailCard from '../components/CocktailCard';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchConktailsQuery = (searchTerm) => {
    return {
        queryKey: ['search', searchTerm || 'all'],
        queryFn: async () => {
            const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
            return response.data.drinks;
        }
    }
}

export const loader = (queryClient) => async ({ request }) => {

    const url = new URL(request.url);

    // const searchTerm = 'margarita';
    // const searchTerm = '';
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchConktailsQuery(searchTerm));

    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    
    // return 'Something is loading...';
    // return {drinks: response.data.drinks, searchTerm};
    return { searchTerm };
};


const Landing = () => {

    // const data = useLoaderData();
    // const {drinks, searchTerm} = useLoaderData();
    const { searchTerm } = useLoaderData();
    // console.log(drinks);
    // console.log(data);
    const {data: drinks} = useQuery(searchConktailsQuery(searchTerm));

    return (
        <div>
            {/* <h2>Landing Page</h2> */}
            <SearchForm searchTerm={searchTerm} />
            <CocktailList drinks={drinks} />
        </div>
    );
};

export default Landing;
