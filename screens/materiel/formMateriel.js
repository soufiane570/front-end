// AddEquipmentForm.js
import React, { useState } from 'react';
import { View, Text, Button,TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const FormMateriel = ({route}) => {
  const { barcodeData } = route.params;
  const [codeBarre, setCodeBarre] = useState('');
  const [idLocale, setIdLocale] = useState('');
  const [numCategorieMat, setNumCategorieMat] = useState('');
  const [idPriseEnCharge, setIdPriseEnCharge] = useState('');
  const [numSerie, setNumSerie] = useState('');
  const [dateReception, setDateReception] = useState('');
  const [dateMiseEnService, setDateMiseEnService] = useState('');
  const [etat, setEtat] = useState('');
  const [imageMateriel, setImageMateriel] = useState('');
  const [error, setError] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const handleSubmit = () => {
    if (!idLocale || !numCategorieMat || !idPriseEnCharge || !numSerie || !dateReception || !dateMiseEnService || !etat || !imageMateriel) {
      setError('Please fill in all fields');
      return;
    }
    // Implement form submission logic, e.g., sending data to server
    console.log({
      codeBarre,
      idLocale,
      numCategorieMat,
      idPriseEnCharge,
      numSerie,
      dateReception,
      dateMiseEnService,
      etat,
      imageMateriel
    });
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/6HwhfW-LogoMakr.png')} style={styles.logo} />
      <ScrollView style={styles.formContainer}>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Text style={styles.label}>Code Barre:</Text>
        <TextInput
          value={barcodeData}
          onChangeText={setCodeBarre}
          style={styles.input}
          editable={false}
        />

        {/* Other form fields */}
        {/* ID Locale */}
        <Text style={styles.label}>Locale:</Text>
        <Picker
          selectedValue={idLocale}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setIdLocale(itemValue)}
        >
          <Picker.Item label="Select Locale" value="" />
          <Picker.Item label="Locale 1" value="locale1" />
          <Picker.Item label="Locale 2" value="locale2" />
          {/* Add more locales as needed */}
        </Picker>

        {/* Numéro Catégorie Matériel */}
        <Text style={styles.label}>La Catégorie de Matériel:</Text>
        <TextInput
          value={numCategorieMat}
          onChangeText={setNumCategorieMat}
          style={styles.input}
        />
        {/* ID Prise En Charge */}
        <Text style={styles.label}>Prise En Charge:</Text>
        <TextInput
          value={idPriseEnCharge}
          onChangeText={setIdPriseEnCharge}
          style={styles.input}
        />

        {/* Numéro de Série */}
        <Text style={styles.label}>Numéro de Série:</Text>
        <TextInput
          value={numSerie}
          onChangeText={setNumSerie}
          style={styles.input}
        />

        {/* Date de Réception */}
        <Text style={styles.label}>Date de Réception:</Text>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
        {/* <DateTimePicker
          // value={dateReception}
          mode="date"
          display="spinner"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || dateReception;
            setDateReception(currentDate);
          }}
          style={styles.input}
        /> */}
        {/* <TextInput
          value={dateReception}
          onChangeText={setDateReception}
          style={styles.input}
        /> */}

        {/* Date de Mise en Service */}
        <Text style={styles.label}>Date de Mise en Service:</Text>
        <TextInput
          value={dateMiseEnService}
          onChangeText={setDateMiseEnService}
          style={styles.input}
        />

        {/* État */}
        <Text style={styles.label}>État:</Text>
        <TextInput
          value={etat}
          onChangeText={setEtat}
          style={styles.input}
        />

        {/* Image Matériel */}
        <Text style={styles.label}>Image Matériel:</Text>
        {/* <Button title="Upload Image" onPress={handleImageUpload} /> */}
        <TextInput
          value={imageMateriel}
          onChangeText={setImageMateriel}
          style={styles.input}
        />
      </ScrollView>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  formContainer: {
    marginTop: 100, // Adjust this to accommodate the logo size
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default FormMateriel;
