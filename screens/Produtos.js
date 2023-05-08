import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Camisa() {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarAoCarrinho = (nome, valor) => {
    const item = {
      nome,
      valor,
    };
    setCarrinho([...carrinho, item]);
    setQuantidade(quantidade + 1);
    setValorTotal(valorTotal + valor);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={30} color="black" />
            <Text style={styles.quantidadeCarrinho}>{quantidade}</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: 'https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-monohidratada-250g-growth-supplements.png',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Creatina Monohidratada</Text>
        <Text style={styles.valor}>R$80,00</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarAoCarrinho('Creatina Monohidratada', 80.00)}>
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: 'https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>(TOP) WHEY PROTEIN CONCENTRADO (1KG) - GROWTH SUPPLEMENTS
</Text>
        <Text style={styles.valor}>R$100,00</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarAoCarrinho('Whey Protein', 100.00)}>
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: 'https://www.gsuplementos.com.br/upload/produto/imagem/m_pr-treino-insanity-300g-growth-supplements-4.png',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>PRÉ-TREINO INSANITY 300G - GROWTH SUPPLEMENTS</Text>
        <Text style={styles.valor}>R$ 110,00</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarAoCarrinho('Pre treino', 110.00)}>
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: 'https://www.gsuplementos.com.br/upload/produto/layout/1350/barra-crisp-whey-growth-supplements-v5.webp',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>BARRA CRISP COM WHEY PROTEIN</Text>
        <Text style={styles.valor}>R$ 60,00</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarAoCarrinho('Barrinha', 60.00)}>
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>

        <Text style={styles.valorTotal}>
          Valor total: R$ {valorTotal.toFixed(2)}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 10,
  },
  quantidadeCarrinho: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 5,
    marginLeft: -10,
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  valorTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});