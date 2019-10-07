import React, { Component } from 'react';
import {

	StyleSheet,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');



export default class CenaContatos extends Component {
	render() {
		return (

			<View style = {{flex:1 , backgroundColor: '#fff' }}>
				<StatusBar
					backgroundColor = '#61BD8C'
				/>

				<BarraNavegacao voltar navigator={this.props.navigator}   corDeFundo= '#61BD8C'/>

				<View style={styles.titulo}>
					<Image source={detalheContatos}/>
					<Text style={styles.txtTitulo}>Contatos </Text>
				</View>

				
				<View style={styles.detalheContatos}>
					<Text style={styles.txtContato}> TEL: (82) 3336-6580 </Text>
					<Text style={styles.txtContato}> CEL: (82) 99624-0785 </Text>  	
					<Text style={styles.txtContato}> EMAIL: tales.monteiro@hotmail.com </Text>
					
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
		color:'#61BD8C',
		fontSize:30
	},

	detalheContatos:{
		marginTop:20,
		padding:20
	},

	txtContato:{
		fontSize:18
	}

	

});


