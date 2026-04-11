import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [ noteTitle, setNoteTitle ] = useState('');
  const [ noteValue, setNoteValue ] = useState('');
  return (
    <View style={styles.container}>
      <Button title='Back' />
      <Button title='Options'/>
      <View>
        <TextInput
          placeholder="New Note Title"
          onChangeText={(newText: string) => setNoteTitle(newText)}
          defaultValue={noteTitle}
        />
        <TextInput
          placeholder="Start here..."
          onChangeText={(newText: string) => setNoteValue(newText)}
          defaultValue={noteValue}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
