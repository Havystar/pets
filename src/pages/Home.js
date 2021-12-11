import React from 'react';
import { PreviewCard } from '../components/PreviewCard';
import { Searchbar } from '../components/Searchbar';

export function Home() {
    return (
        <div className="App">
            <burger></burger>
            <Searchbar></Searchbar>

            <div className='items'><PreviewCard></PreviewCard>
            <PreviewCard></PreviewCard></div>

        </div>
    );
}