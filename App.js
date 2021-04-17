import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CardAdd from './components/CardAdd';
import CardList from './components/CardList';

// const useState = (defaultValue) => {
// // logic dari team react
// return [state, setState]
// }

const dummy = [
  {
    name: 'Makan',
    done: false,
  },
  {
    name: 'Minum',
    done: false,
  },
  {
    name: 'Lari',
    done: true,
  },
];

const App = () => {
  // let name = 'Budi';
  // const updateVariable = () => {
  //   name = 'Prass';
  //   console.log(name);
  // };
  // const [state, setState] = useState('Budi');
  // // const myState = useState(""); // [state, setState]
  // // const state = myState[0];
  // // const setState = myState[1]
  // const updateState = () => {
  //   setState('Irsyaad');
  // };
  // return (
  //   <View>
  //     <Text>Variable Hello {name}</Text>
  //     <TouchableOpacity onPress={updateVariable}>
  //       <Text>Click variable</Text>
  //     </TouchableOpacity>
  //     <Text>State Hello {state}</Text>
  //     <Button text="Click State" onPress={updateState} />
  //   </View>
  // );
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.shape1} />
  //     <View style={styles.shape2} />
  //   </View>
  // );

  const [dataState, setDataStae] = useState([]);

  const getData = async () => {
    try {
      const {data} = await axios.get('api.com/get-data');

      setDataState(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [todos, setTodos] = useState([]);

  const addTodo = nameTodo => {
    setTodos(oldValue => {
      return [{name: nameTodo, done: false}, ...oldValue];
    });
  };

  const checkTodo = index => {
    setTodos(oldValue => {
      const myTodos = [...oldValue];

      return myTodos.map((value, i) => {
        if (index === i) {
          return {...value, done: true};
        } else {
          return value;
        }
      });
    });
  };

  // const [tab, setTab] = useState(1);
  // const renderTab = () => {
  //   if (tab == 1) {
  //     return <Text>Tab 1</Text>;
  //   } else if (tab == 2) {
  //     return <Text>Tab 2</Text>;
  //   }
  // };

  return (
    <View style={{backgroundColor: '#f0f0f0', flex: 1, padding: 16}}>
      <CardAdd submit={addTodo} />
      <CardList list={todos} onCheck={checkTodo} />
    </View>
  );
};

// const Button = props => {
//   return (
//     <TouchableOpacity onPress={props.onPress}>
//       <Text>{props.text}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'red',
//     flex: 1,
//   },
//   shape1: {backgroundColor: 'blue', flex: 1},
//   shape2: {backgroundColor: 'green', flex: 3},
// });

export default App;
