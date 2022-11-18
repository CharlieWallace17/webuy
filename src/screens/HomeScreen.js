import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';
import ProductBlock from '../components/ProductBlock';
import Constants from 'expo-constants';

const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <SearchBar
                placeholder='Search...'
                onChangeText={(search) => setSearchText(search)}
                value={searchText}
                lightTheme
                round
            />
            <ProductBlock />
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
