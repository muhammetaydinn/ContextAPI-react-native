import {Button, View, Text} from 'react-native';
import {SiteContext, useContext} from '../../context/SiteContext';
export default function SwitchLanguage() {
  const {lang, setLang} = useContext(SiteContext);

  const changeLang = () => {
    if (lang === 'tr') {
      setLang('en');
    } else {
      setLang('tr');
    }
  };
  return (
    <View>
      <Button
        title="Dil Değiştir"
        onPress={() => {
          changeLang();
        }}
      />
    </View>
  );
}
