import React, { Component } from 'react';
import { View, AppRegistry, StatusBar } from 'react-native';

import CenaPrincipal from './src/componentes/CenaPrincipal';
//import CenaClientes from './src/componentes/CenaClientes';

class App extends Component {
	render() {
		return (
			<CenaPrincipal />
		);
	}
}

AppRegistry.registerComponent('consultoria', () => App);
