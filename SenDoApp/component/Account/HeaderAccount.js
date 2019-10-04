import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons';
import color from  '../../constants/color';

export default class HeaderAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={headerAccountStyle.headerAccountWrapper}>
                <View style={headerAccountStyle.headerAvatar}>
                    <Avatar
                        source={{
                            uri:
                                'https://store.playstation.com/store/api/chihiro/00_09_000/container/IE/en/99/EP2402-CUSA05624_00-AV00000000000098//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100'
                        }}
                        size='large'
                        rounded
                        showEditButton
                    />
                </View>

                <View style={headerAccountStyle.infoWrapper}>
                    <View>
                        <Text style={headerAccountStyle.textName}>
                            Sen Baby
                        </Text>
                    </View>
                        <Text style={headerAccountStyle.textEmail}>
                            senbaby@gmail.com
                        </Text>
                    <View>

                    </View>
                </View>

                <TouchableOpacity style={headerAccountStyle.iconWrapper}>
                    <MaterialIcons name='navigate-next' size={50} color={color.darkPink} />
                </TouchableOpacity>

            </View>
        );
    }
}

const headerAccountStyle = StyleSheet.create({
    headerAccountWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20
        
    },
    headerAvatar: {
        width: '22%',
        justifyContent: "center",
        alignItems: "center"
    },

    infoWrapper: {
       width: '67%',
        justifyContent: "center",
        paddingLeft: 10

    },

    textEmail: {
        fontSize: 24,
        fontWeight: '400',
        color: color.darkPink
        
    },

    textName: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    iconWrapper: {
        justifyContent: "center",
        width: '11%'
    }
})