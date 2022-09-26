import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { GameCard, IGameCard } from "../../components/GameCard";
import { Loading } from "../../components/Loading";
import { GAMES } from "../../utils/games";
import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<IGameCard[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // async function fetchGames() {
  //   setLoading(true);
  //   // try {
  //   //   const response = await fetch("http://172.18.188.156:3333/games");
  //   //   const games = await response.json();

  //   //   setGames(games);
  //   // } catch (error) {
  //   //   console.log(error)
  //   //   throw new Error(JSON.stringify(error));
  //   // } finally {
  //   //   setLoading(false);
  //   // }

  //   fetch("http://172.18.188.156:3333/games")
  //     .then((res) => res.json())
  //     .then((data) => setGames(data))
  //     .finally(() => setLoading(false));
  // }

  function handleOpenGame({ banner, id, title }: IGameCard) {
    navigation.navigate("ads", { banner, id, title });
  }

  useEffect(() => {
    // fetchGames();
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        {
          <FlatList
            data={GAMES}
            keyExtractor={(game) => game.id}
            renderItem={({ item }) => (
              <GameCard
                data={item}
                key={item.id}
                onPress={() => handleOpenGame(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />
        }
      </SafeAreaView>
    </Background>
  );
}
