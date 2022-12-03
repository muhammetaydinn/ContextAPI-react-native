import Header from './Header';
import Footer from './Footer';
import { useAuth } from './context';
import React from 'react';
import { View,Text } from 'react-native';
export default function Home() {

    const {user} =useAuth()
  return (
      <>
          {user && (<View style={{backgroundColor:'red'}}>
              <Text>bu alan sadece giris yapılınca görülür</Text>
          </View>)}
      <Header />
      <Footer />
    </>
  );
}
