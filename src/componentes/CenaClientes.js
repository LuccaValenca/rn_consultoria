import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';

//Imagens
const clientes1 = require('../../imgs/cliente1.png');
const clientes2 = require('../../imgs/cliente2.png');
const clientes3 = require('../../imgs/clientes3.png');
const voltar = require('../../imgs/voltar.png');

class CenaClientes extends Component {
	static navigationOptions = ({ navigation }) => (

		{
		//capturando title que foi passado no App.js
		title: navigation.state.params.title,
		headerTitleStyle: {
			color: '#fff',
			fontWeight: '100'
		},
		headerStyle: {
			backgroundColor: '#76C91E'
		},
		headerLeft: (
			<TouchableHighlight underlayColor={'#76C91E'} activeOpacity={0.2} onPress={() => this.props.navigation.goBack()}>
				<Image style={{ width: 30, height: 30, marginLeft: 15 }} source={voltar} /> 
			</TouchableHighlight>
		)

	});


	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<StatusBar backgroundColor='#76C91E' />
				<View style={estilo.viewDetalhes}>
					<Image style={{ width: 80, height: 80 }} source={clientes3} />
					<Text style={estilo.txtDetalhes}> -  Nossos Clientes</Text>
				</View>
				<View style={estilo.clientes}> 
					<Image source={clientes1} />
					<Text style={estilo.txtTitulo}>Lorem Ipsum dolorum</Text>
				</View>
				<View style={estilo.clientes}> 
					<Image source={clientes2} />
					<Text style={estilo.txtTitulo}>Lorem Ipsum dolorum</Text>
				</View>
			</View>
		);
	}
}

const estilo = StyleSheet.create({
	viewDetalhes: {
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	txtDetalhes: {
		color: '#76C91E',
		fontSize: 25,
		fontWeight: 'bold',
		margin: 10,
	},
	clientes: {
		flexDirection: 'row',
		borderRadius: 1,
		elevation: 1,
		alignItems: 'center',
		padding: 10,
		marginHorizontal: 6,
		marginVertical: 7,
	},
	txtTitulo: {
		marginLeft: 8,
		fontSize: 15,
		fontWeight: 'normal',
		textAlign: 'center',
		color: '#000',
	},
});

export default CenaClientes;
