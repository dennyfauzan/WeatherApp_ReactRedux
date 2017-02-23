import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch(action.type){
     case FETCH_WEATHER:
      //return state.concat([action.payload.data]); sama dengan ...state
      return [action.payload.data, ...state ];
      //console.log(action.payload.data);
    }
    return state;
}
