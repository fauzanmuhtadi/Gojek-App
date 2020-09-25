import React, { Component } from 'react';
import { View } from 'react-native';
import { Account, Help, Home, Inbox, Order } from '../../../assets/icon';
import { NavBarIcon } from '../../../components/molecules';


class NavBar extends Component {
    render() {
        return(
            <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'grey'}}>
                <NavBarIcon title='Home' img={Home} active />
                <NavBarIcon title='Orders' img={Order} />
                <NavBarIcon title='Help' img={Help} />
                <NavBarIcon title='Inbox' img={Inbox} />
                <NavBarIcon title='Account' img={Account} />
            </View>
        )
    }
}

export default NavBar;