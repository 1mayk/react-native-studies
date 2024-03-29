import { Text, View } from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import games, { IGames } from "./src/data/games";
import GameList from "./src/pages/GameList";
import styles from "./AppStyle";

export default function App() {
  const [filteredGames, setFilteredGames] = useState<IGames[]>(games);

  const handleFilterChange = (filterText: string) => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onFilterChange={handleFilterChange} />
      <GameList games={filteredGames} />
      <Footer />
    </View>
  );
}
