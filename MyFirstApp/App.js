import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Amo ni ang title sang student profile */}
      <Text style={styles.title}>Student Profile</Text>

      {/* Ari ang pangalan sang student */}
      <Text style={styles.name}>Divino Doy Asdulo</Text>

      {/* Ari ang course sang student */}
      <Text style={styles.course}>
        BS Information Technology
      </Text>

      {/* Ari ang welcome message para sa React Native */}
      <Text style={styles.message}>
        Welcome to my first React Native application!
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  course: {
    fontSize: 18,
    marginBottom: 20,
  },

  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});
