
export const GET_CITIES = "GET_CITIES";
export const DELETE_CITY = "DELETE_CITY";
export const ADD_CITY = "ADD_CITY";
export const EDIT_SINGLE_CITY = "EDIT_SINGLE_CITY";
export const UPDATE_CITY = "UPDATE_CITY";
export const FILTER = "FILTER";


export const SEARCH_CITY = "SEARCH_CITY";

export const SORT = "SORT";

export const sort =(by)=> {
    return {
        type:SORT,
        payload: by
    }
}
// export const filter = (text) => {
  
//     return {
//         type:FILTER,
//         payload:text,
//     }

// }