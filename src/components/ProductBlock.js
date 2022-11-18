import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { fetchProducts } from '../features/productsSlice';
import { Card } from '@rneui/base';

const ProductBlock = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    if (products.isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (products.errMess) {
        return (
            <View>
                <Text>{products.errMess}</Text>
            </View>
        );
    }

    const renderProductItem = ({ item }) => {
        console.log('The item image is:', item.image);
        return (
            <Card
                containerStyle={{
                    margin: 0,
                    width: 190,
                    height: 200,
                    backgroundColor: 'none',
                    borderWidth: 0,
                    elevation: 0,
                }}
            >
                <Card.Image
                    source={{ uri: item.image }}
                    containerStyle={{
                        borderRadius: 20,
                        width: '100%',
                    }}
                />
                <Card.Title
                    style={{
                        fontSize: 12,
                        marginTop: 10,
                    }}
                >
                    {item.product}
                </Card.Title>
            </Card>
        );
    };

    return (
        <FlatList
            data={products.productsArray}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns='2'
            columnWrapperStyle={{
                justifyContent: 'space-around',
            }}
        />
    );
};

export default ProductBlock;
