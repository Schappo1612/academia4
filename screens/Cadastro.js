import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../screens/style';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async () => {
    // Validar os dados do formulário
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (!validateEmail(email)) {
      alert('Por favor, insira um email válido');
      return;
    }

    // Armazenar os dados do usuário em um objeto
    const usuario = {
      nome,
      email,
      senha,
    };

    // Enviar o objeto com os dados do usuário para o servidor
    try {
      const response = await fetch('https://meuservidor.com/cadastrar-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
      const data = await response.json();
      console.log(data);
      // Redirecionar o usuário para a página de login
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      alert('Houve um erro ao cadastrar o usuário. Por favor, tente novamente');
    }
  };

  const validateEmail = (email) => {
    // Regex para validar o email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
