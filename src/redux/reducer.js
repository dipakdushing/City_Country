import * as types from "./actionType";

const initialState = {
    cities:[],
    citie:{},
    loading:true
}

const citiesReducers = (state = initialState , action ) => {
    switch (action.type){
        case types.GET_CITIES:
            return {
                ...state,
                cities: action.payload,
                loading:false,

            }
         case types.DELETE_CITY:
           case types.ADD_CITY:
            case types.UPDATE_CITY:
            case types.SEARCH_CITY_START:    
             return {
                 ...state,
                 loading:false,
             }  
         case types.EDIT_SINGLE_CITY:
             return {
                 ...state,
                 citie: action.payload,
                 loading:false,
             }
        //  case types.FILTER:
        //      return {
        //          ...state,
        //          cities: state.cities.filter(e => e.country.includes(action.payload))
        //      }    
         case types.SORT:
            
                return {
                    ...state,
                    cities:[...state.cities.sort((a,b)=> 
                        a[action.payload]>b[action.payload]?1:a[action.payload]<b[action.payload]?-1:0

                    ),]
                }  
             
            

        default:
            return state;
    }
};

export default citiesReducers