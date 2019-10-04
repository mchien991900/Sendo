import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import RecentSearch from '../../component/Home/RecentSearch';
import TrendSearch from '../../component/Home/TrendSearch';
import { recentSearch } from '../../constants/util';
import { SearchBar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import color from '../../constants/color';

const SearchScreen = (props) => {
    const [text, setText] = useState('');

    OnChangeText = (text) => {
        setText(text);
    }
    OnSubmit = () =>{
        props.OnSubmit(text)
    }
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.OnPress}>
                    <MaterialIcons name='navigate-before' size={50} color='white' />
                </TouchableOpacity>
                <SearchBar
                    value={text}
                    onChangeText={OnChangeText}
                    placeholderTextColor={color.darkPink}
                    placeholder={'Tìm kiếm trên Sendo'}
                    searchIcon={{ size: 24 }}
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.searchBarInput}
                    onSubmitEditing={OnSubmit} // <== Your Navigation handler
                    returnKeyType='search'
                >

                </SearchBar>
            </View>
            <RecentSearch data={recentSearch} />
            <TrendSearch data={recentSearch} />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {

    },

    header: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.darkPink,
        paddingTop: 32


    },
    searchBar: {
        width: '85%',
        backgroundColor: '#FFFAFA',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10

    },

    searchBarInput: {
        width: '100%',
        backgroundColor: '#FFFAFA',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }


})

export default SearchScreen;
