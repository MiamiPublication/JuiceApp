import { View, Text, StyleSheet } from "react-native";


const DetailView = ({ route }) => {
    const { title } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   text: {
    fontSize: 24,
   },
});

export default DetailView;