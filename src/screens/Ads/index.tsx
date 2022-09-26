import { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { IAdRouteParams } from "../../@types/navigation";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { DuoCard } from "../../components/DuoCard";

import { adsByGame, IAd } from "../../utils/ads";
import { THEME } from "../../theme";
import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";

export const Ads = () => {
  const [adList, setAdList] = useState<IAd[]>([]);
  const navigate = useNavigation();
  const route = useRoute();

  const game = route.params as IAdRouteParams;

  function handleBack() {
    navigate.goBack();
  }

  useEffect(() => {
    const AnyAdsByGame: any = adsByGame;
    const anyGameTitle: any = game.title;

    setAdList(AnyAdsByGame[anyGameTitle]);

    // fetch(`http://172.18.188.156:3333/games/${game.id}/ads`)
    //   .then((res) => res.json())
    //   .then((data) => setAdList(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} resizeMode="cover" />

          <View style={styles.right} />
        </View>
        <Image source={{ uri: game.banner }} style={styles.cover} />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={adList}
          keyExtractor={(ad) => ad.id}
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          renderItem={({ item }) => (
            <DuoCard key={item.id} data={item} onConnect={() => {}} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
};
