import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';

//Imagens
const email = require('../../imgs/email2.png');
const voltar = require('../../imgs/voltar.png');

class CenaContato extends Component {
	static navigationOptions = ({ navigation }) => (

		{
		//capturando title que foi passado no App.js
		title: navigation.state.params.title,
		headerTitleStyle: {
			color: '#fff',
			fontWeight: '100'
		},
		headerStyle: {
			backgroundColor: '#FF9505'
		},
		headerLeft: (
			<TouchableHighlight underlayColor={'#FF9505'} activeOpacity={0.2} onPress={() => this.props.navigation.goBack()}>
				<Image style={{ width: 30, height: 30, marginLeft: 15 }} source={voltar} /> 
			</TouchableHighlight>
		)

	});


	render() {
		return (
			<View style={estilo.content}>
				<StatusBar backgroundColor='#FF9505' />
				<View style={estilo.viewDetalhes}>
					<Image style={{ width: 80, height: 80 }} source={email} />
					<Text style={estilo.txtDetalhes}> -  Entre em contato</Text>
				</View>
				<View style={estilo.contatos}> 
					<Text style={estilo.txtTitulo}>Telefone: (11) 2722-6831</Text>
					<Text style={estilo.txtTitulo}>Celular: (11) 98190-9086</Text>
					<Text style={estilo.txtTitulo}>Email: contato@atmconsultoria.com.br</Text>
				</View>
			</View>
		);
	}
}

const estilo = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: '#fff'
	},
	viewDetalhes: {
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	txtDetalhes: {
		color: '#FF9505',
		fontSize: 25,
		fontWeight: 'bold',
		margin: 10,
	},
	contatos: {
		alignItems: 'center',
		padding: 10,
		marginHorizontal: 6,
		marginVertical: 7,
	},
	txtTitulo: {
		fontSize: 15,
		fontWeight: 'normal',
		color: '#000',
		marginVertical: 5
	},
});

export default CenaContato;