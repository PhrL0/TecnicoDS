import React, { useState } from "react";
import { View, Modal, Button, Text, TextInput, StyleSheet, FlatList, SafeAreaView } from 'react-native';

// O componente principal da sua aplicação
export default function App() {
    // Estado para controlar a visibilidade do modal
    const [visivel, setVisivel] = useState(false);
    // Estado para armazenar o texto digitado no input
    const [texto, setTexto] = useState('');
    // Estado para armazenar a lista de textos salvos
    const [textoSalvos, setTextoSalvos] = useState([]);

    /**
     * Função para salvar o texto do input na lista.
     * Só salva se o texto não estiver vazio.
     */
    const salvarTexto = () => {
        if (texto.trim()) {
            setTextoSalvos([...textoSalvos, texto]);
            setTexto(''); // Limpa o input
            setVisivel(false); // Fecha o modal
        }
    };

    /**
     * Função para cancelar a operação e fechar o modal.
     */
    const cancelar = () => {
        setTexto(''); // Limpa o input
        setVisivel(false); // Fecha o modal
    };

    return (
        // SafeAreaView garante que o conteúdo não fique sob as áreas do sistema (como o notch)
        <SafeAreaView style={style.container}>
            <View style={style.buttonContainer}>
                {/* Botão para abrir o diálogo modal */}
                <Button title="Abrir Diálogo" onPress={() => setVisivel(true)} />
            </View>

            {/* Lista para exibir os textos que foram salvos */}
            <FlatList
                style={style.list}
                data={textoSalvos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={style.textoSalvo}>{item}</Text>}
                // Adiciona um texto caso a lista esteja vazia
                ListEmptyComponent={<Text style={style.emptyText}>Nenhum texto salvo ainda.</Text>}
            />

            {/* Componente Modal que é exibido sobre a tela principal */}
            <Modal visible={visivel} animationType="slide" transparent={true}>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Este é um diálogo modal</Text>
                        
                        {/* Input para o usuário digitar o texto */}
                        <TextInput
                            style={style.input}
                            placeholder="Digite algo..."
                            value={texto}
                            onChangeText={setTexto}
                        />
                        
                        <View style={style.modalButtonContainer}>
                           {/* Botão para salvar o texto e fechar o modal */}
                           <Button title="Salvar e Fechar" onPress={salvarTexto} />
                           {/* Botão para cancelar e fechar o modal */}
                           <Button title="Cancelar" onPress={cancelar} color="red" />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

// Folha de estilos para o componente
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        marginBottom: 20,
    },
    list: {
        width: '100%',
    },
    textoSalvo: {
        fontSize: 16,
        padding: 15,
        marginTop: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlign: 'center',
        overflow: 'hidden', // Garante que o texto não saia das bordas arredondadas
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#888',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
    },
    modalContent: {
        width: '85%',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
});
