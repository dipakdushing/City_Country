import * as types from "./actionType";
import axios from "axios";
import { ActionTypes } from "@mui/base";

const getCities = (cities) => ({
    type: types.GET_CITIES,
    payload: cities,
});

const deletedCity = () => ({
    type: types.DELETE_CITY,
    
});

const addedCity = () => ({
    type: types.ADD_CITY,
    
});
const updatedCity = () => ({
    type: types.UPDATE_CITY,
    
});
const editCity = (city) => ({
    type: types.EDIT_SINGLE_CITY,
    payload : city,


    
});
// const SearchCityStart = (query) => ({
//     type: types.SEARCH_CITY_START,
//     payload : query,
  
// });
//  const filter = (text) => ({
  
//         type:types.SEARCH_CITY,
//         payload:text,


// })



export const loadCities = ()=> {
 return function (dispatch) {
     axios.get
     ('http://localhost:8080/cities').then((res) => {
         console.log("data", res)
         dispatch(getCities(res.data));
     }).catch((err) => console.log(err))
 };
};

export const deleteCity = (id)=> {
    return function (dispatch) {
        axios.delete
        (`http://localhost:8080/cities/${id}`).then((res) => {
            //console.log("data", res)
            dispatch(deletedCity());
            dispatch(loadCities())
        }).catch((err) => console.log(err))
    };
   };

   export const addCity = (city)=> {
    return function (dispatch) {
        axios.post
        (`http://localhost:8080/cities`, city).then((res) => {
            //console.log("data", res)
            dispatch(addedCity());
            dispatch(loadCities())
            
        }).catch((err) => console.log(err))
    };
   };

   export const getCity = (id)=> {
    return function (dispatch) {
        axios.get
        (`http://localhost:8080/cities/${id}`).then((res) => {
            console.log("city_one", res)
            dispatch(editCity(res.data));
            //dispatch(loadCities())
        }).catch((err) => console.log(err))
    };
   };
   export const updateCity = (city , id)=> {
    return function (dispatch) {
        axios.put
        (`http://localhost:8080/cities/${id}`, city).then((res) => {
            console.log("update", res)
            dispatch(updatedCity());
            dispatch(loadCities())
        }).catch((err) => console.log(err))
    };
   };
//    export const searchCity = (value)=> {
//     return function (dispatch) {
//         axios.get
//         (`http://localhost:8080/cities?q=${value}`).then((res) => {
//             console.log("search", res)
//             dispatch(filter(query));
//             dispatch(loadCities())
//         }).catch((err) => console.log(err))
//     };
//    };