import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import {SiteContext} from '../context/SiteContext';
export default function Home() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('tr');
  const data = {
    theme,
    setTheme,
    lang,
    setLang,
  };
  return (
    <View>
      <SiteContext.Provider value={data}>
        <Header />
        <Footer />
      </SiteContext.Provider>
    </View>
  );
}
