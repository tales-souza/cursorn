import React, { Component } from 'react';
import {

	StyleSheet,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');



export default class CenaEmpresa extends Component {
	render() {
		return (

			<View style = {{flex:1 , backgroundColor: '#fff' }}>
				<StatusBar
					backgroundColor = '#EC7148'
				/>

				<BarraNavegacao voltar navigator={this.props.navigator}  corDeFundo = '#EC7148'/>

				<View style={styles.titulo}>
					<Image source={detalheEmpresa}/>
					<Text style={styles.txtTitulo}>A Empresa </Text>
				</View>

				
				<View style={styles.detalheEmpresa}>
					<Text style={styles.txtContato}> Somos uma empresa que oferece soluções estratégicas para nossos clientes através da TI </Text>
				
					
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
		color:'#EC7148',
		fontSize:30
	},

	detalheEmpresa:{
		marginTop:20,
		padding:20
	},

	txtContato:{
		fontSize:18
	}

	

});


