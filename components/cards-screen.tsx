import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchCards } from "../api";
import { Card } from "./Card";
import { addCard } from "../hooks/add-card";

export const CardsScreen = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchCards().then((apiResult) => {
        setCards(apiResult);
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCardPress = (card: Card) => {
    Alert.alert(card.name, card.description, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Add",
        onPress: () => addCard(card),
      },
    ]);
  };

  return (
    <>
      {cards.map((card) => (
        <Card key={card.card_id} card={card} onPress={handleCardPress} />
      ))}
    </>
  );
};
