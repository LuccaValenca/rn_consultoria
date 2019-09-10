import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BarraNavegacao from './BarraNavegacao';
import CenaClientes from './CenaClientes';
import CenaContato from './CenaContato';
import CenaEmpresa from './CenaEmpresa';
import CenaServico from './CenaServico';

//Imagens
const logo = require('../../imgs/logo.png');
const clientes = require('../../imgs/clientes.png');
const email = require('../../imgs/email.png');
const empresa = require('../../imgs/empresa.png');
const servicos = require('../../imgs/servicos.png');

class CenaPrincipal extends Component {
	static navigationOptions = {
		header: BarraNavegacao
	}

	render() {
		let { navigate } = this.props.navigation;
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<StatusBar backgroundColor='#470024' />
				<BarraNavegacao />
				<View style={estilo.viewLogo}>
					<Image source={logo} />
				</View>
				<View style={estilo.viewBotoes}>
					<TouchableOpacity style={[estilo.btns, estilo.btnClientes]} onPress={() => navigate('Clientes', { title: 'Clientes' })}>
						<Image style={{ width: 70, height: 70 }} source={clientes} />
						<Text style={estilo.textBtns}>CLIENTES</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[estilo.btns, estilo.btnContato]} onPress={() => navigate('Contato', { title: 'Contato' })}>
						<Image style={{ width: 70, height: 70 }} source={email} />
						<Text style={estilo.textBtns}>CONTATO</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[estilo.btns, estilo.btnEmpresa]} onPress={() => navigate('Empresa', { title: 'Sobre a Empresa'})}>
						<Image style={{ width: 70, height: 70 }} source={empresa} />
						<Text style={estilo.textBtns}>SOBRE A EMPRESA</Text> 
					</TouchableOpacity>

					<TouchableOpacity style={[estilo.btns, estilo.btnServicos]} onPress={() => navigate('Servico', { title: 'Nossos Serviços' })}>
						<Image style={{ width: 70, height: 70 }} source={servicos} />
						<Text style={estilo.textBtns}>SERVIÇOS</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const estilo = StyleSheet.create({
	viewLogo: {
		flex: 1,
		alignItems: 'center',
		padding: 12
	},
	viewBotoes: {
		flex: 4,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 15,
		justifyContent: 'center'
	},
	textBtns: {
		fontSize: 14,
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		marginVertical: 10,
	},
	btns: {
		width: 135,
		height: 135,
		padding: 15,
		margin: 15,
		alignItems: 'center',
		elevation: 5
	},
	btnClientes: {
		backgroundColor: '#76C91E',
	},
	btnContato: {
		backgroundColor: '#FF9505',
	},
	btnEmpresa: {
		backgroundColor: '#470024',
	},
	btnServicos: {
		backgroundColor: '#016FB9',
	}
});

const StackApp = StackNavigator(
{
  Home: { screen: CenaPrincipal, },
  Clientes: { screen: CenaClientes, },
  Contato: { screen: CenaContato, },
  Empresa: { screen: CenaEmpresa, },
  Servico: { screen: CenaServico, }
},
{
	headerMode: 'float',
}
);

export default StackApp;
