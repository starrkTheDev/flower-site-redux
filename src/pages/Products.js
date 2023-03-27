import Product from '../components/Product';
import classes from './Products.module.css';
import tulip from '../img/tulip.jpg';
import rose from '../img/rose.png';
import roses_boquet from '../img/roses_boquet.jpg';
import tulips_boquet from '../img/tulips_boquet.jpg';
import chrysanthemum from '../img/chrysanthemum.JPG';
import special_boquet from '../img/special_boquet.jpg';
import carnation from '../img/carnation.JPG';
import carnations_boquet from '../img/carnations_boquet.JPG';
import lily from '../img/lily.jpg';
import lilies from '../img/lilies.png';
import dahlia from '../img/dahlia.png';
import dahlias_boquet from '../img/dahlias_boquet.png';

const DUMMY_PRODUCTS = [
    {
        id: "f1",
        name: "Tulip",
        price: 3,
        image: tulip
    },
    {
        id: "f2",
        name: "Tulips boquet",
        price: 30,
        image: tulips_boquet
    },
    {
        id: "f3",
        name: "Rose",
        price: 5,
        image: rose
    },
    {
        id: "f4",
        name: "Roses boquet",
        price: 50,
        image: roses_boquet
    },
    {
        id: "f5",
        name: "Chrysanthemum",
        price: 2,
        image: chrysanthemum
    },
    {
        id: "f6",
        name: "Special boquet",
        price: 100,
        image: special_boquet
    },
    {
        id: "f7",
        name: "Carnation",
        price: 4,
        image: carnation
    },
    {
        id: "f8",
        name: "Carnations boquet",
        price: 40,
        image: carnations_boquet
    },
    {
        id: "f9",
        name: "Lily",
        price: 4,
        image: lily
    },
    {
        id: "f10",
        name: "Lilies boquet",
        price: 45,
        image: lilies
    },
    {
        id: "f11",
        name: "Dahlia",
        price: 3,
        image: dahlia
    },
    {
        id: "f12",
        name: "Dahlias boquet",
        price: 15,
        image: dahlias_boquet
    }

]

const Products = (props) => {
    return (
        <main className={classes.background}>
            <div className={classes.wrapper}>
                <ul className={classes.list}>
                    {DUMMY_PRODUCTS.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </ul>
            </div>
        </main>
    )
};

export default Products;