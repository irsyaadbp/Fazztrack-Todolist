import React from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../styles';
import Radio from './Radio';

const CardList = props => {
  return (
    <View style={[globalStyles.card, {marginTop: 16}]}>
      <Text style={globalStyles.title}>Todos Today</Text>
      <View style={{paddingVertical: 8}}>
        {/* [].length => 0
          [1, 2].length => 2 */}
        {props.list.length === 0 ? (
          <Text style={{color: '#aaa'}}>No Todo Found</Text>
        ) : (
          props.list
            .sort((x, y) => {
              return Number(x.done) - Number(y.done);
            })
            .map((value, index) => {
              return (
                <Radio
                  key={index}
                  text={value.name}
                  checked={value.done}
                  onCheck={() => props.onCheck(index)}
                />
              );
            })
        )}
      </View>
    </View>
  );
};

export default CardList;
