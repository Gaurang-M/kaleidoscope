import React, { FunctionComponent, useContext } from 'react'
import { kaleidoscopeAppContext } from '../context/city-context';
import NavBar from './NavBar';
import Region from './Region';
import { KaleidoscopeData } from '../api/graphql-kaleidoscope';
import '../style/loader.css';
import Currency from './Currency';
import Covid from './Covid';
import Holidays from './Holiday';
import CurrencyTimeSeriese from './CurrencyTimeSeriese';
import CovidTimeSeriese from './CovidTimeSeriese';
import Footer from './Footer';

const LandingPage : FunctionComponent<{}> = () => {
    const data : KaleidoscopeData = useContext(kaleidoscopeAppContext).KaleidoscopeData;
    return(
        <div className="">
            <NavBar />
            {!data.country && <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
            </div>}
            {data.country && 
                <div className="">  
                    <Region />
                    <div className="flex flex-col md:flex-row justify-between md:mx-32 mt-8">
                        <Currency />
                        <Covid />
                    </div>
                    <div className="flex justify-center md:mx-32 mt-8">
                        <Holidays />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:mx-32 mt-8">
                        <CurrencyTimeSeriese />
                        <CovidTimeSeriese />
                    </div>
                    <div className="mt-8">
                        <Footer />
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default LandingPage;