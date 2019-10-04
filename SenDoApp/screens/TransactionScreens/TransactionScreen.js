import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native';
import color from '../../constants/color';
import { MaterialIcons } from '@expo/vector-icons';



const cheerio = require('react-native-cheerio')


export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      img: '',
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sở thích',
      headerStyle: {
        backgroundColor: '#FFF',
      },

      headerTintColor: color.darkPink,

      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },

    };
  };

  fetchDataProduct = async() => {
    const data = this.props.navigation.getParam('data');
    const url = data.url;
    //console.log(url)
    const searchUrl = url;
    const response = await fetch(searchUrl); 
    const htmlString = await response.text();
    const link = cheerio.load(htmlString);     
    const img = "https:" + link(".img_2xfX").attr("src");
    const name = link(".productName_3Cdc").text();
    const price = link(".currentPrice_2zpf").text();
    const text = link(".info").text();
    console.log(text)
  
    this.setState({
      name,
      img,
      price

    })

  }

  componentDidMount = async() => {
    this.fetchDataProduct();

  }



  OnPress = () => {
    this.props.navigation.goBack()
  }

  render() {
    //const data = this.props.navigation.getParam('data');
   // console.log(data.url)
    const {name, img, price} = this.state;
   // console.log(img)

    return (

      <ScrollView style={styles.container}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.OnPress}>
            <MaterialIcons name='navigate-before' size={40} color={color.darkPink} />
          </TouchableOpacity>
        </View>

        <View style ={{paddingHorizontal: 20}}>
        <View style={styles.imageWrapper}>
          <Image style={styles.Image} source={{uri:img}} />
        </View>


        <View style={styles.infoWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.Name}>{name}</Text>
            <Text style={styles.Price}>{price}</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Successful')} style={styles.BuyButton}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Mua</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.describe}>
          <Text style={styles.textDescription}>Mô tả sản phẩm</Text>
        </View>
        <View style={styles.detailProduct} />
        <Text style={{fontSize: 16}}>
          Beautiful
        </Text>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: 20,
    
    backgroundColor: 'white',
    
  },
  //////////HEADER FORMAT/////////////////////////////////////////////////////////////

  Image: {
    height: 250,
    width: 250,

  },
  Name: {
    fontSize: 18,
    fontWeight: '300',

  },
  Price: {
    fontSize: 22,
    fontWeight: 'bold',


  },
  BuyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.darkPink,
    borderRadius: 25,
    height: 40,
    width: 330
  },
  infoWrapper: {
    flexDirection: 'column',
   justifyContent: 'space-around',
    height: 150,
    alignItems: "center"

  },

  textWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'

  },

  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 300

  },
  //////////MIDDLE FORMAT//////////////////////////////////////////////////////////////

  /////////DESCRIBE FORMAT/////////////////////////////////////////////////////////////
  describe: {
    height: 40,
    justifyContent: "center",
  
  },

  textDescription: {
    fontSize: 18,
    fontWeight: 'bold'

  },
 
  detailProduct: {
    justifyContent: "center",
    alignItems: "center"
    
  },
  /////////FOOTER FORMAT/////////////////////////////////////////////////////////////


});
