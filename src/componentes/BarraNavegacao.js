import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const lg = require('../../imgs/lg.png');

class BarraNavegacao extends Component {
	render() {
		return (
			<View style={estilo.barra}>
				<Image style={{width: 40, height: 40}} source={lg} />
			</View>
		);
	}
}

const estilo = StyleSheet.create({
	barra: {
		backgroundColor: '#470024',
		padding: 10,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titulo: {
		flex: 1,
		fontSize: 20,
		textAlign: 'center',
		color: '#fff',
	}
});

export default BarraNavegacao;
