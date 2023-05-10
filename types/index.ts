export interface Card {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: (boolean | null)[];
  period_start: string | null;
  period_stop: string | null;
  type: "ALL" | "TASKS" | "CORSES";
}

export interface ApiResult {
  success: boolean;
  result: Card[];
}
