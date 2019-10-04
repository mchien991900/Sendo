import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import color from '../../constants/color';
const TrendSearchItem = (props) => {
    return(
        <TouchableOpacity style={styles.item}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

const TrendSearch = (props) => {
    const {data} = props;
    return(
        <View style={styles.container}>
             <Text style={styles.headerText}>
                Trend
            </Text>

            <View style={styles.itemWrapper}>
                {
                    data.map(item => (
                        <TrendSearchItem key={item} text={item} />
                    ))
                }
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        padding: 10

    },

    headerText: {
        fontSize: 22,
        color: color.darkPink,
        fontWeight: "bold",
        marginBottom: 10,
    },

    itemWrapper:{
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    item: {
        borderWidth: 1,
        borderColor: color.darkPink,
        padding: 5,
        borderRadius: 10,
        margin: 5
    },
})

export default TrendSearch;
