import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

// Para o problema do Expo com Conexão ao EXPO

// Vá no PowerShell cole o comando abaixo e troque o IPWINDOWS pelo ip do seu windows e o IPLINUX pela da maquina que está rodando o servidor

// netsh interface portproxy add v4tov4 listenport=19000 listenaddress=IPWINDOWS connectport=19000 connectaddress=IPLINUX

// Faça isso para esse script também

// netsh interface portproxy add v4tov4 listenport=3333 listenaddress=IPWINDOWS connectport=3333 connectaddress=IPLINUX

// Inicie os serviços novamente e
// Agora vá no Expo (inicie sem o --tunnel) e tente conectar pelo Endereço do exp://IPWINDOWS:19000

// Se a aplicação abrir, no Fetch do mobile, ao invez de usar o IP do servidor Backend, use o IP do Windows.
