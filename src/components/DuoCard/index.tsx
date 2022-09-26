import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native";

import { adsByGame, IAd } from "../../utils/ads";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";
import { styles } from "./styles";

interface IProps {
  data: IAd;
  onConnect: () => void;
}

export const DuoCard = ({ data, onConnect }: IProps) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.buttom} onPress={() => onConnect()}>
        <GameController color={THEME.COLORS.TEXT} />
        <Text style={styles.buttomTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};
