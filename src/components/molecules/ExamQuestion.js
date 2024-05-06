import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const Question = ({ number, question, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View>
      <Text>{`Questão ${number}: ${question}`}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedOption(option)}
          style={{ backgroundColor: selectedOption === option ? 'blue' : 'white' }}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <Question
        number={1}
        question="Esta é uma pergunta?"
        options={['Opção 1', 'Opção 2', 'Opção 3']}
      />
    </SafeAreaView>
  );
};

export default App;
