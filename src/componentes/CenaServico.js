import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';

//Imagens
const servicos = require('../../imgs/servicos2.png');
const voltar = require('../../imgs/voltar.png');

class CenaServico extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title,
		headerTitleStyle: {
			color: '#fff',
			fontWeight: '100',
		},
		headerStyle: {
			backgroundColor: '#016FB9'
		},
		headerLeft: (
			<TouchableHighlight underlayColor={'#016FB9'} activeOpacity={0.2} onPress={() => this.props.navigation.goBack()}>
				<Image style={{ width: 30, height: 30, marginLeft: 15 }} source={voltar} />
			</TouchableHighlight>
		)
	});

	render() {
		return (
			<View style={estilo.content}>
				<StatusBar backgroundColor='#016FB9' />
				<View style={estilo.viewDetalhes}>
					<Image style={{ width: 80, height: 80 }} source={servicos} />
					<Text style={estilo.txtDetalhes}> -  Nossos Serviços</Text>
				</View>
				<View style={estilo.descricao}>
					<Text style={estilo.txtDescricao}>- Consultoria.</Text>
					<Text style={estilo.txtDescricao}>- Processos.</Text>
					<Text style={estilo.txtDescricao}>- Acompanhamento de Projetos.</Text>
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
		color: '#016FB9',
		fontSize: 25,
		fontWeight: 'bold',
		margin: 10,
	},
	descricao: {
		padding: 10,
		marginHorizontal: 6,
		marginVertical: 7,
	},
	txtDescricao: {
		fontSize: 15,
		fontWeight: 'normal',
		color: '#000',
		marginVertical: 5,
		textAlign: 'justify',
	},
});

export default CenaServico;
