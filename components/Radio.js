import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Radio = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onCheck}
      disabled={props.checked}>
      <View style={[styles.radio, props.checked ? styles.radioCheck : {}]} />
      <Text
        style={[
          styles.titleRadio,
          props.checked ? styles.titleRadioCheck : {},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  radio: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  radioCheck: {
    backgroundColor: 'black',
  },
  titleRadio: {
    fontSize: 16,
    marginLeft: 8,
  },
  titleRadioCheck: {textDecorationLine: 'line-through'},
});

export default Radio;
