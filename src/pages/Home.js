import React from 'react';
import { PreviewCard } from '../components/PreviewCard';
import { Searchbar } from '../components/Searchbar';

export function Home() {

    let data = {
        "categories": [
            "Akcesoria",
            "Jedzenie",
            "Leki",
            "Koce",
            "Odzież",
            "Higiena"
        ],
        "listingns": [
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.elfiasfora.pl/wp-content/uploads/2014/03/karma-dla-psa.jpg", "price": 10.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "psy", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://www.zooplus.pl/magazyn/wp-content/uploads/2018/07/zmiana-karmy-u-kota-768x569.jpg", "price": 20.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "koty", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.telekarma.pl/userfiles/images/aktualnosci/zdj%C4%99cia%20do%20aktualno%C5%9Bci/najlepsza-karma-dla-psa-super-ranking.jpg", "price": 30.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "psy", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8hJKHdVodyFmx2OJOV6qHYrtVtg-jAvJxg&usqp=CAU", "price": 24.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "koty", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.elfiasfora.pl/wp-content/uploads/2014/03/karma-dla-psa.jpg", "price": 10.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "psy", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://www.zooplus.pl/magazyn/wp-content/uploads/2018/07/zmiana-karmy-u-kota-768x569.jpg", "price": 20.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "koty", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.telekarma.pl/userfiles/images/aktualnosci/zdj%C4%99cia%20do%20aktualno%C5%9Bci/najlepsza-karma-dla-psa-super-ranking.jpg", "price": 30.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "psy", "ilosc": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8hJKHdVodyFmx2OJOV6qHYrtVtg-jAvJxg&usqp=CAU", "price": 24.00 },
                "details": { "desc": "blablabla", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "koty", "ilosc": "5", "date": 1639231470638 }
            },
        ]

    }
    return (
        <div className="App" >
            <burger></burger>
            <Searchbar></Searchbar>

            <div className='items'>
                {data.listingns.map(e => {
                    console.log(e.preview.img, e.preview.title, e.preview.price)
                    return (<PreviewCard img={e.preview.img} title={e.preview.title} price={e.preview.price}></PreviewCard>)
                })}

            </div>

        </div>
    );
}