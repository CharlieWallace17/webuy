import { FlatList } from 'react-native';
import { Card } from '@rneui/base';

const ProductBlock = (props) => {
    const renderProductItem = ({ item }) => {
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
                    {item.name}
                </Card.Title>
            </Card>
        );
    };

    return (
        <FlatList
            data={props.searchProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns='2'
            columnWrapperStyle={{
                justifyContent: 'space-around',
            }}
            windowSize={10}
        />
    );
};

export default ProductBlock;
