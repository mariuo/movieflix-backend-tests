import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createReview } from '../services';
import { theme } from '../styles';
import Toast from 'react-native-tiny-toast';
import { useNavigation } from '@react-navigation/core';

interface ReviewFormProps {
    id: number,
    title: null,
    subTitle: null,
    year: null,
    imgUrl: null,
    synopsis: null,
    genreId: null,
    reviews: [],
}
     

const FormReview: React.FC<ReviewFormProps> = ({id }) => {
    
    const navigation = useNavigation();

    const idMov = id;

    const [review, setReview] = useState({});

    async function handleSave () {
       
        try{
            await createReview(review);
            Alert.alert("Review salva com sucesso!");            

        }catch(res){
            Alert.alert("Erro ao salvar");
        }
    }

    return (
        <View style={theme.reviewContainer}>
            <View style={theme.reviewFormContent}>
                <TextInput
                    placeholder="Deixe sua avaliação aqui..."
                    style={theme.textArea}
                    onChangeText={(e) => setReview({ movieId: idMov, text: e })}
                >
                </TextInput>
                <TouchableOpacity style={theme.formBtn} onPress={handleSave}>
                    <Text style={theme.textPrimaryBtn}> Salvar Avaliação</Text>                    
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FormReview;