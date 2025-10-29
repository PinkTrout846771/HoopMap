// HOME PAGE OF APP

import { Text, View } from "react-native";

export default function Courts() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Courts Page</Text>
    </View>
  );
}
