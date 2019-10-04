import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import color from '../../constants/color';

const ItemRecentSearch = (props) =>{
    return(
        <TouchableOpacity style = {{flexDirection: "row", justifyContent: 'space-between', padding: 5,}}>
            <Text style={styles.textItemSearch}>
                {props.name}
            </Text>
            <MaterialIcons name='search' size={24} color={color.darkPink} />
        </TouchableOpacity>
    )
}

const RecentSearch = (props) => {
    const {data} = props;

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Recent
            </Text>

            {
                data.map(item =>(
                    <ItemRecentSearch key={item} name ={item} />

                ))
            }
            

        </View>

    )

}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 22,
        color: color.darkPink,
        fontWeight: "bold",
        marginBottom: 10,
    },

    textItemSearch: {
        fontSize: 20
    },

    container: {
        paddingTop: 20,
        paddingHorizontal: 10
    }
})

export default RecentSearch;
