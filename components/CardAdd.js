import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../styles';

const CardAdd = props => {
  const [temporaryTodo, setTemporaryTodo] = useState('');

  const onSubmit = () => {
    if (!temporaryTodo) {
      return Alert.alert('Warning', 'Todo name cant be empty');
    }
    props.submit(temporaryTodo);
    setTemporaryTodo('');
  };

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.title}>Add Todo</Text>
      <TextInput
        style={styles.input}
        value={temporaryTodo}
        onChangeText={text => setTemporaryTodo(text)}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity style={styles.btnBlue} onPress={onSubmit}>
        <Text style={styles.titleBtn}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 12,
  },
  btnBlue: {
    backgroundColor: '#356af0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  titleBtn: {color: 'white', fontWeight: 'bold'},
});

export default CardAdd;
