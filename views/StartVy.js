import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const DATA = [
    {id: '1', title: 'Apelsinjuice'},
    {id: '2', title: 'Banansmoothie'},
    {id: '3', title: 'Cider'}
];

const Item = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const StartVy = ({ navigation }) => {
    return (
        <FlatList
            data={DATA}
            renderItem={({item}) => (
                <Item title={item.title} onPress={() => 
                    navigation.navigate('DetailView', { title: item.title })}/>
            )}
            keyExtractor={item => item.id}
            />
    );
}

const styles = StyleSheet.create({
   item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
   },
   title: {
    color: 'white',
    fontSize: 16,
   },
});

export default StartVy;