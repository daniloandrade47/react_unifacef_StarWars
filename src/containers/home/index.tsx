import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Layout, Text, Avatar} from '@ui-kitten/components';
import { inject, observer } from 'mobx-react';
import { ROUTES_NAMES } from '../../routes';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore,
    navigation: any
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {

  async componentDidMount(){
    const { getFilms } = this.props.homeStore;
    await getFilms();
  }

  render(){
    const navigateScreen = (id: number) => {
      const {navigate } = this.props.navigation;
    navigate( ROUTES_NAMES.Home, { id });
    }

    return(<>

    </>);

  }                
}