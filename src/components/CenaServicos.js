import React, { Component } from 'react';
import {

	StyleSheet,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');



export default class CenaServicos extends Component {
	render() {
		return (

			<View style = {{flex:1 , backgroundColor: '#fff' }}>
				<StatusBar
					backgroundColor = '#19D1C8'
				/>

				<BarraNavegacao voltar navigator={this.props.navigator} corDeFundo = '#19D1C8'/>

				<View style={styles.titulo}>
					<Image source={detalheServicos}/>
					<Text style={styles.txtTitulo}>Nossos Serviços </Text>
				</View>

				
				<View style={styles.detalheContatos}>
					<Text style={styles.txtContato}> - Consultoria  </Text>
					<Text style={styles.txtContato}> - Processos </Text>  	
					<Text style={styles.txtContato}> - Acompanhamento de Projetos </Text>
					
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
		color:'#19D1C8',
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


