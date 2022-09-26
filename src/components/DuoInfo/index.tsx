import { ColorValue, Text, View } from "react-native";
import { styles } from "./styles";

interface IDuoInfo {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export const DuoInfo = ({ label, value, colorValue = "#fff" }: IDuoInfo) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};
