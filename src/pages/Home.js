import { PreviewCard } from '../components/PreviewCard';
import { Searchbar } from '../components/Searchbar';
import { Menu } from '../components/Menu'
import { useBurgerToggle, useListing } from '../hooks/useHooks';
import { Burger } from '../components/Burger';
import { Categories } from '../components/Categories';
import { Listing } from '../components/Listing'
import { Close } from '../components/Close'
export function Home() {
    const { open, setOpen } = useBurgerToggle();
    const { listing, setListing } = useListing();
    let data = {
        "categories": [
            { "title": "Akcesoria", "img": "https://lh3.googleusercontent.com/proxy/8mWHQDBmetnXCi6NK8P6W_bN7DO9JJum_OqKCCSPRM7GdbCQyYTIfE4_e081adgCI7B74Q1zN6-Jj4LW1aohRkIkjRtfOc_JItGb33lsClJhLK7OlPjCMZd9B1R-wOVRr8S-ss41OFg" },
            { "title": "Jedzenie", "img": "https://lh3.googleusercontent.com/proxy/8mWHQDBmetnXCi6NK8P6W_bN7DO9JJum_OqKCCSPRM7GdbCQyYTIfE4_e081adgCI7B74Q1zN6-Jj4LW1aohRkIkjRtfOc_JItGb33lsClJhLK7OlPjCMZd9B1R-wOVRr8S-ss41OFg" },
            { "title": "Leki", "img": "https://lh3.googleusercontent.com/proxy/8mWHQDBmetnXCi6NK8P6W_bN7DO9JJum_OqKCCSPRM7GdbCQyYTIfE4_e081adgCI7B74Q1zN6-Jj4LW1aohRkIkjRtfOc_JItGb33lsClJhLK7OlPjCMZd9B1R-wOVRr8S-ss41OFg" },
            { "title": "Koce", "img": "https://lh3.googleusercontent.com/proxy/8mWHQDBmetnXCi6NK8P6W_bN7DO9JJum_OqKCCSPRM7GdbCQyYTIfE4_e081adgCI7B74Q1zN6-Jj4LW1aohRkIkjRtfOc_JItGb33lsClJhLK7OlPjCMZd9B1R-wOVRr8S-ss41OFg" },
            { "title": "Odzież", "img": "https://lh3.googleusercontent.com/proxy/8mWHQDBmetnXCi6NK8P6W_bN7DO9JJum_OqKCCSPRM7GdbCQyYTIfE4_e081adgCI7B74Q1zN6-Jj4LW1aohRkIkjRtfOc_JItGb33lsClJhLK7OlPjCMZd9B1R-wOVRr8S-ss41OFg" },
            { "title": "Higiena", "img": "https://lh3.googleusercontent.com/proxy/8mWHQDBmetnXCi6NK8P6W_bN7DO9JJum_OqKCCSPRM7GdbCQyYTIfE4_e081adgCI7B74Q1zN6-Jj4LW1aohRkIkjRtfOc_JItGb33lsClJhLK7OlPjCMZd9B1R-wOVRr8S-ss41OFg" }
        ],
        "listingns": [
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.elfiasfora.pl/wp-content/uploads/2014/03/karma-dla-psa.jpg", "price": 10.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "size": null, "dla": "psy", "ammount": "5", "date": 1639290354598 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://www.zooplus.pl/magazyn/wp-content/uploads/2018/07/zmiana-karmy-u-kota-768x569.jpg", "price": 20.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "size": null, "dla": "koty", "ammount": "5", "date": 1639290354598 }
            },
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.telekarma.pl/userfiles/images/aktualnosci/zdj%C4%99cia%20do%20aktualno%C5%9Bci/najlepsza-karma-dla-psa-super-ranking.jpg", "price": 30.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "size": null, "dla": "psy", "ammount": "5", "date": 1639290354598 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8hJKHdVodyFmx2OJOV6qHYrtVtg-jAvJxg&usqp=CAU", "price": 24.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "size": null, "dla": "koty", "ammount": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.elfiasfora.pl/wp-content/uploads/2014/03/karma-dla-psa.jpg", "price": 10.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "size": null, "dla": "psy", "ammount": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://www.zooplus.pl/magazyn/wp-content/uploads/2018/07/zmiana-karmy-u-kota-768x569.jpg", "price": "Za darmo" },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "size": null, "dla": "koty", "ammount": "5", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Psa", "img": "https://www.telekarma.pl/userfiles/images/aktualnosci/zdj%C4%99cia%20do%20aktualno%C5%9Bci/najlepsza-karma-dla-psa-super-ranking.jpg", "price": 30.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "psy", "ilosc": "", "date": 1639231470638 }
            },
            {
                "preview": { "title": "Karma dla Kota", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8hJKHdVodyFmx2OJOV6qHYrtVtg-jAvJxg&usqp=CAU", "price": 24.00 },
                "details": { "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dolor semper, eleifend leo eget, elementum orci. Etiam imperdiet vestibulum massa sed faucibus. Nunc commodo, sem quis commodo faucibus, urna ligula luctus tortor, non interdum eros purus vitae ex. Pellentesque sapien sem, hendrerit et arcu sit amet, mollis dapibus arcu. Vivamus finibus, nibh et malesuada lobortis, odio nisl hendrerit diam, sed consectetur enim ante ac ante. Donec vitae augue non neque vestibulum consectetur. Vestibulum commodo at nisl ut pellentesque. Aliquam eget ante ut erat vestibulum ultrices. Duis ac porttitor tellus. Morbi commodo dictum pretium. Vestibulum mattis lorem arcu, et gravida ligula semper eu. In hac habitasse platea dictumst. Sed semper ante at quam blandit, id facilisis metus scelerisque.", "img": ["image", "image"], "category": "Jedzenie", "rozmiar": "", "dla": "koty", "ilosc": "5", "date": 1639231470638 }
            },
        ]

    }
    return (
        <div className="App" >
            <Menu open={open}></Menu>
            <Burger open={open} setOpen={setOpen}></Burger>
            <Searchbar></Searchbar>
            {listing == null ? <>
                <Categories categories={data.categories}></Categories>
                <div className='forYou'>
                    <h2>Wybrane dla ciebie</h2>
                    <div className='items'>

                        {data.listingns.map(e => {
                            console.log(e.preview.img, e.preview.title, e.preview.price)
                            return (<PreviewCard setListing={setListing} e={e}></PreviewCard>)
                        })}

                    </div>
                </div>
            </>
                : <>
                    <Close setListing={setListing}></Close>
                    <Listing e={listing}></Listing>
                </>
            }
        </div>

    );
}