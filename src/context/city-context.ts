import {createContext}  from 'react';
import { KaleidoscopeData } from '../api/graphql-kaleidoscope';

export type KaleidoscopeDataContext = {
    KaleidoscopeData: KaleidoscopeData | object
}  

const contextDefaultValue: KaleidoscopeDataContext = {
    KaleidoscopeData: {}
} 

export const kaleidoscopeAppContext = createContext<KaleidoscopeDataContext>(
    contextDefaultValue
);