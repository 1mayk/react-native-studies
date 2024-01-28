import { View, Text, FlatList } from 'react-native';
import { IGames } from '../../data/games';
import GameCard from '../../components/GameCard';
import styles from './styles';

interface GamesListProps {
  games: IGames[];
}

interface ItemListProps {
  item: IGames;
}

export default function GameList({ games }: GamesListProps) {
  // Função responsável por renderizar cada um
  // dos jogos
  // Ele é o map passando por cada um dos objetos, por isso a função
  // traz o item como prop, o item é o game sendo interado dentro do map
  // RETORNA UM OBJETO => const algo = () => ()
  const renderGame = ({item}: ItemListProps) => (
    <GameCard game={item}/>
  )

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Jogos adicionados recentemente</Text>
      <FlatList 
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={games}
        renderItem={renderGame} // como essa lista vai ser renderizada
        keyExtractor={item => String(item.id)} // identificador unico
      />
    </View>
  )
}
