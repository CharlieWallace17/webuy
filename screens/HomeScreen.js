import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';

const HomeScreen = () => {
    const [search, setSearch] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}></View>
            <SearchBar
                placeholder='Search...'
                onChangeText={(search) => setSearch(search)}
                value={search}
                style={styles.search}
                lightTheme
                round
            />
            <Text>Open up App.js to start working on your app!</Text>
        </ScrollView>
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
