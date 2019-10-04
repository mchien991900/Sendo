import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ItemHorizonal from './ItemHorizontal';


export default class ScrollViewHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {listItem} = this.props;


    return (
      <View style={scrollViewHorizontalWrapper.itemWrapper}>
          <View style={scrollViewHorizontalWrapper.headerWrapper}>
              <Text style={scrollViewHorizontalWrapper.textHeaderStyle}>{listItem.title}</Text>
              
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                  [...listItem.items].map(item => {
                      return(
                        <ItemHorizonal OnPress={() => this.props.OnPress(item)} key={item.name} data={item} />
                      )

                  })
              }

          </ScrollView>

      </View>
    );
  }
}

const scrollViewHorizontalWrapper = StyleSheet.create({
    itemWrapper: {
        
    },

    textHeaderStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e91e63'
    },

    headerWrapper :{
        justifyContent: 'flex-start',
        padding: 20
    }

})
