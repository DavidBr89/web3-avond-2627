interface TMImage {
  ratio: "16_9" | "4_3" | "3_2";
  width: number;
  height: number;
  url: string;
}

export interface TMEvent {
  id: string;
  name: string;
  description: string;
  images: TMImage[];
}

export interface TMResponse {
  _embedded: {
    events: TMEvent[];
  };
}
