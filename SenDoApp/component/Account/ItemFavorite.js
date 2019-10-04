
import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

import color from '../../constants/color'

const {height, width} = Dimensions.get('window');
const widthItem = width*0.4;


const ItemFavorite =  props => {
    const {name, url} = props.data;
    return (
       
        <TouchableOpacity style={itemAccountStyle.container}>
            <Image source={{ uri:url }} style={{ width: 100, height: 100 }} />
            <Text style={itemAccountStyle.text}>{name}</Text>

        </TouchableOpacity>

    )
}

const itemAccountStyle = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: color.darkPink,
        borderWidth: 1,
        borderRadius: 10,
        width: widthItem,
        paddingVertical: 10,
        margin: widthItem*0.05
    
    },

    text : {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10
    }


});

export default ItemFavorite;