import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';

//Imagens
const empresa = require('../../imgs/empresa2.png');
const voltar = require('../../imgs/voltar.png');

class CenaEmpresa extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title,
		headerTitleStyle: {
			color: '#fff',
			fontWeight: '100',
		},
		headerStyle: {
			backgroundColor: '#470024'
		},
		headerLeft: (
			<TouchableHighlight underlayColor={'#470024'} activeOpacity={0.2} onPress={() => this.props.navigation.goBack()}>
				<Image style={{ width: 30, height: 30, marginLeft: 15 }} source={voltar} />
			</TouchableHighlight>
		)
	});

	render() {
		return (
			<View style={estilo.content}>
				<StatusBar backgroundColor='#470024' />
				<View style={estilo.viewDetalhes}>
					<Image style={{ width: 80, height: 80 }} source={empresa} />
					<Text style={estilo.txtDetalhes}> -  A Empresa</Text>
				</View>
				<View style={estilo.descricao}>
					<Text style={estilo.txtDescricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet aliquam turpis, ut semper justo. Phasellus sollicitudin, metus ut porta varius, ipsum odio sollicitudin metus, vitae ultrices urna libero vitae erat. Nam aliquet tristique risus a placerat. Aliquam molestie malesuada erat, ut fermentum orci mollis a. Etiam auctor augue id felis suscipit mollis. Phasellus egestas lacus nunc, quis scelerisque risus congue sed. Aliquam ut nunc quis lectus lacinia bibendum. Etiam ac mauris ante. Cras erat nunc, commodo at urna non, fermentum interdum enim. Nullam malesuada lacus eu elit porttitor eleifend id ac dui. Quisque vitae tempus dui.</Text>
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
		color: '#470024',
		fontSize: 25,
		fontWeight: 'bold',
		margin: 10,
	},
	descricao: {
		alignItems: 'center',
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

export default CenaEmpresa;
