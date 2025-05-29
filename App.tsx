/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [age, setAge] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
      setResult('Please enter valid weight and height.');
      return;
    }

    const heightCM = heightNum / 100; // Convert height from cm to meters
    const bmi = weightNum / (heightCM * heightCM); // Calculate BMI
    let classification = '';

    if (bmi < 18.5) {
      classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      classification = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      classification = 'Overweight';
    } else {
      classification = 'Obesity';
    }

    setResult(`Your BMI at ${age}years is ${bmi.toFixed(2)} (${classification}).`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age (Years):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          placeholder="Enter Your Age"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          placeholder="Enter Your Weight!"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          placeholder="Enter Your Height!"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sex:</Text>
        <TextInput
          style={styles.input}
          keyboardType="ascii-capable"
          value={sex}
          onChangeText={setSex}
          placeholder="Male/Female"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default App;
