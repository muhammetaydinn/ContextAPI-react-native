import { Button, Text, View } from "react-native"
import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';
import { useAuth } from "./context";
export default function Header() {
    const { user ,dispatch} = useAuth()
    const login = () => {
      dispatch(
        {type: 'LOGIN',
          payload: {
            name: 'tayfun',
            id:1
          }
        
        }
        );
    }
    const logout = () => {
        dispatch({
          type: 'LOGOUT',
        });
    }
  return (
      <View>
          {user&&<Button title="cikis yap" onPress={logout} ></Button>||<Button onPress={login} title="giris yap"></Button>}
      <SwitchTheme />
      <SwitchLanguage />
    </View>
  );
}