import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ScrollViewHorizontal from '../../component/Home/ScrollViewHorizontal';
import { spXuHuongTimKiem, spDaXem } from '../../constants/util';
import color from '../../constants/color';
import SearchScreen from './SearchScreen';
import trendCategories from '../../constants/trendCattegories';
import products from '../../constants/products';

const cheerio = require('react-native-cheerio')





export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isSearch: false,
      inputText: '',
    
    };
  }

  fetchDataProduct = async() => {
    const searchUrl = `https://www.sendo.vn/android-tivi-sony-4k-55-inch-kd-55x8000g-20631746.html?source_block_id=listing_products&source_info=desktop2_60_1569657031828_e8acdcf5cdf94879b835be910c887ba3_3_algo5_-1_2_2_-1&source_page_id=cate2_default_listing_desc`;
    const response = await fetch(searchUrl); 
    const htmlString = await response.text();
    const link = cheerio.load(htmlString);     
    const url = link(".img_2xfX").attr("src");
    console.log(url) 

  }
  fetchDataCategory = async() => {
    const searchUrl = `https://www.sendo.vn`;
    const response = await fetch(searchUrl); 
    const htmlString = await response.text();
    const link = cheerio.load(htmlString);     
    const data = link(".undefined ls-is-cached lazyloaded").attr("src");
    console.log(data)
    //console.log(response.status) 

  }

  componentDidMount = async() => {
    this.props.navigation.setParams({ onClickHeaderButton: this.OnClickHeaderButton });
    //this.fetchDataCategory();

    
  }


  static navigationOptions = ({ navigation }) => {
    const { params = { isShow: false } } = navigation.state;
    if (!params.isShow) {
      
      return {
        title: 'Trang chủ',
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: color.darkPink,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft: <FontAwesome name='search' size={24} color='#e91e63' onPress={() => params.onClickHeaderButton()} style={{ paddingLeft: 15, }} />

      }

    }

      return { header: null };
  };

  OnClickHeaderButton = () => {
    this.props.navigation.setParams({
      isShow: true,
    });

    this.setState({
      isSearch: true
    })
  }

  OnPressBack = () =>{
    this.setState({
      isSearch: false
    })

    this.props.navigation.setParams({
      isShow: false,
    });


  }

  OnSubmit = (text) =>{
    
    console.log(text)
  }

  OnPressItem = (item) =>{
    this.props.navigation.navigate('Transaction', {data: item})
    //this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'TransactionStack' }));

  }

 

  render() {
    const { isSearch, inputText } = this.state;
    if (!isSearch) {
      return (
        <ScrollView showsVerticalScrollIndicator={false} style={homeScreenStyle.container}>

          <View style={homeScreenStyle.scrollView}>
            <ScrollViewHorizontal listItem={trendCategories}  OnPress={this.OnPressItem} />
          </View>

          <View style={homeScreenStyle.scrollView} >
            <ScrollViewHorizontal listItem={products} OnPress={this.OnPressItem} />
          </View>



        </ScrollView>
      );

    }
    else {
      return (
        <View style={homeScreenStyle.containerSearch}>
          <SearchScreen  OnSubmit={this.OnSubmit} OnPress={this.OnPressBack} />
        </View>
      )

    }
  }
}

const homeScreenStyle = StyleSheet.create({
  container:{
    backgroundColor: '#EEEEEE',
  
  },

  containerSearch: {
   
  },

  scrollView: {
    paddingBottom: 20,
    backgroundColor: 'white',
    marginTop: 10
  }

})

