import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';
import ProductBlock from '../components/ProductBlock';
import Constants from 'expo-constants';

const HomeScreen = () => {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <SearchBar
                placeholder='Search...'
                onChangeText={(search) => setSearch(search)}
                value={search}
                style={styles.search}
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
