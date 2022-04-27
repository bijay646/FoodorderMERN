import axios from 'axios';

export const getAllPizzas=()=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const response = axios.get('/api/pizzas/getpizzas')
        dispatch({type:'GET_PIZZAS_SUCCESS'})
    }
    catch(error){
        dispatch({type:'GET_PIZZAS_FAILED'})

    }

}