import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

export interface IGameCard {
  id: string;
  title: string;
  banner: string;
  _count: {
    ads: string;
  };
}

interface IProps extends TouchableOpacityProps {
  data: IGameCard;
}

export function GameCard({ data, ...rest }: IProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{uri: data.banner}} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
