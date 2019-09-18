import React, { Component } from 'react';
import {

	StyleSheet,
	Text,
	View
} from 'react-native';

export default class BarraNavegacao extends Component {
	render() {
		return (
			<View style={styles.barraTitulo}> 
			<Text style={styles.titulo}> TMS Consultoria </Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	barraTitulo: {
		backgroundColor: '#e6a400',
		padding:10,
		height: 60
	},
	
	titulo: {
		flex: 1,
		fontSize:18,
		textAlign: 'center',
		color: 'white'
	}

});




