import React, { Component } from 'react';
import {

	StyleSheet,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
	render() {
		return (

			<View style = {{flex:1 , backgroundColor: '#fff' }}>
				<StatusBar
					backgroundColor = '#B9C941'
				/>

				<BarraNavegacao voltar navigator={this.props.navigator} corDeFundo= '#B9C941'/>

				<View style={styles.titulo}>
					<Image source={detalheCliente}/>
					<Text style={styles.txtTitulo}> Nossos Clientes </Text>
				</View>

				
				<View style={styles.detalheClientes}>
					<Image source={cliente1}/>
					<Text style={styles.txtDetalheClientes}> teste </Text>
				</View>
				

				<View style={styles.detalheClientes}>
					<Image source={cliente2}/>
					<Text style={styles.txtDetalheClientes}> teste2 </Text>
				</View>



			</View>
						
		



			);
	}
}


const styles = StyleSheet.create({
	titulo:{
		flexDirection: 'row',
		marginTop:20

	},

	txtTitulo:{
		marginTop:25,
		color:'#b9c941',
		fontSize:30
	},

	detalheClientes:{
		padding:20,
		marginTop:10			
	},


	txtDetalheClientes:{
		fontSize:18,
		marginLeft:20
	}

	

});


