import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { Promo, Search } from '../../../assets/icon';


const SearchFeature = (props) => {
    return(
        <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder='What do you want to eat?' style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
              <Image source={Search} style={{position: 'absolute', top: 5, left: 12}} />
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={Promo} />
            </View>
        </View>
    )
}

export default SearchFeature;