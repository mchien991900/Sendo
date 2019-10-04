import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import ItemFavorite from './ItemFavorite';

const {height, width} = Dimensions.get('window');
const widthItem = width*0.05;

const ListItemFavorite = props => {
    const { list } = props;
    const centerData = Math.floor(list.length / 2);
    return (
        <ScrollView >
            <View style={listItemFavorite.container}>
                <View style={listItemFavorite.collumn}>
                    {
                        list.slice(0, centerData).map(item => {

                            return (
                                <ItemFavorite data={item} key={item.name} />
                            )
                        })
                    }
                </View>
                <View style={listItemFavorite.column}>
                    {
                        list.slice(centerData).map(item => {

                            return (
                                <ItemFavorite data={item} key={item.name} />
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    );

}
const listItemFavorite = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: widthItem,
        paddingVertical: width*0.025,
        justifyContent: 'space-between'
    },

    column: {
        flexDirection: 'column',

    }

})

export default ListItemFavorite;
