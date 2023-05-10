import { Card } from "../types";

export const addCard = (
  card: Omit<Card, "card_id" | "photo_required" | "schedule">
) => {};
