import {combineReducers} from 'redux';
import usuariosReducer, {usariosReducer} from './usuariosReducer';

export default combineReducers({
    usuarios:usuariosReducer
})