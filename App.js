
import React, {Component} from "react";
import { View, Text, StyleSheet,TextInput, Button } from "react-native";



class App extends Component{
 constructor(props){
  super(props);
  this.state={
    nome: " ",
    input: " "

  };

 
  this.entrar = this.entrar.bind(this);
 }
 entrar(){
  if(this.state.input === ''){
    alert('Digite deu nome!')
    return;
  }
 this.setState({nome: 'Bem vindo '+ this.state.input})
 }

 
 
  render(){
    return(

      <View>
        <TextInput style={estyle.input}
        placeholder="Digite seu nome" textAlign="center"
        onChangeText={(texto) => this.setState({input: texto})}
        
        
        />
      <Button title="Entrar" onPress={this.entrar}/>
      <Text style={estyle.text}>{this.state.nome}</Text>
 
      </View>
    );
  }
}



const estyle = StyleSheet.create({
  container:{
    flex: 1,
  },

  input:{
    height:45,
    borderWidth:1,
    borderColor: "black",
    margin:10,
    fontSize:20,
    padding:12,
  },

  text:{

    textAlign:"center",
    fontSize: 25
  }

});

export default App;