import { View, Text, Image } from "react-native";
import { IGames } from "../../data/games";
import styles from "./styles";

interface GameCardProps {
  game: IGames;
}

export default function GameCard({ game }: GameCardProps) {
  const generateStarRating = (ratingScore: number) => {
    const numStars = Math.floor(ratingScore);
    return "⭐".repeat(numStars);
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: game.image }} />
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.data}>{`Platafoma: ${game.platform}`}</Text>
      <Text style={styles.data}>{game.genre}</Text>
      <Text style={styles.data}>{game.releaseDate}</Text>
      <Text style={styles.data}>{game.rating}</Text>
      <Text style={styles.data}>{game.developer}</Text>
      <Text style={styles.data}>{generateStarRating(game.ratingScore)}</Text>
    </View>
  );
}
