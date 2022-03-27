import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Button, Alert, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {

  return (
    <View>
      <View style={styles.getStartedContainer}>
      
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Pilih Pelabuhan Awal')}
        >
          <Text style={styles.text1}>Pelabuhan Awal</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Pilih Pelabuhan Tujuan')}
        >
          <Text style={styles.text1}>Pelabuhan Tujuan</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Pilih Layanan')}
        >
          <Text style={styles.text1}>Layanan</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Pilih Tangal Masuk')}
        >
          <Text style={styles.text1}>Tanggal Masuk</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Pilih Jam Masuk')}
        >
          <Text style={styles.text1}>Jam Masuk</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Pilih Jumlah Tiket')}
        >
          <Text style={styles.text1}>Jumlah Tiket</Text>
        </Pressable>

        <Pressable
          style={styles.button1}
          onPress={() => Alert.alert('Membuat Tiket')}
        >
          <Text style={styles.text1}>Buat Tiket</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  getStartedContainer: {
    marginHorizontal: 50,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 4,
    borderColor: 'darkgray',
    borderWidth: 2,
    elevation: 10,
    backgroundColor: 'lightgray',
  },
  button1: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 4,
    borderColor: 'darkgray',
    borderWidth: 2,
    elevation: 10,
    backgroundColor: 'orange',
  },
  text1: {
    fontSize: 16,
  }
});
