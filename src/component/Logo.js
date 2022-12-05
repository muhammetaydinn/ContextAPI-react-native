import React from 'react';
import {Text} from 'react-native';

import {SiteContext, useContext} from '../context/SiteContext';
import {HeaderContext} from '../context/HeaderContext';
const Logo = () => {
  const {theme, lang} = useContext(SiteContext);
  const {login} = useContext(HeaderContext);
  return (
    <>
      <Text>
        BENİM APP (LOGO) {theme} {lang}{' '}
        {login ? 'Giriş yapıldı' : 'Çıkış yapıldı'}
      </Text>
    </>
  );
};

export default Logo;
