import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from '@rneui/themed';
import ProductBlock from '../components/ProductBlock';
import { fetchProducts } from '../features/products/productsSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector((state) => state.products);

    const [searchText, setSearchText] = useState('');

    const [searchProducts, setSearchProducts] = useState(
        products.productsArray
    );

    console.log('productsArray:', products.productsArray);
    console.log('searchText:', searchText);
    console.log('searchProducts:', searchProducts);

    const updateProductsList = (search) => {
        if (!search) {
            setSearchProducts(products.productsArray);
        } else {
            setSearchProducts(
                products.productsArray.filter((prod) =>
                    prod.name.includes(search)
                )
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <SearchBar
                placeholder='Search...'
                onChangeText={(search) => {
                    setSearchText(search);
                    updateProductsList(search);
                }}
                onCancel={() => setSearchProducts(products.productsArray)}
                onClear={() => setSearchProducts(products.productsArray)}
                value={searchText}
                lightTheme
                round
            />
            <ProductBlock searchProducts={searchProducts} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B2FF9E',
    },
    header: {
        height: 60,
        backgroundColor: '#086375',
    },
});

export default HomeScreen;
