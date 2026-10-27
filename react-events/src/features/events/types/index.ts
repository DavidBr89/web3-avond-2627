export interface TMEvent {
  id: string;
  name: string;
  description: string;
}

export interface TMResponse {
  _embedded: {
    events: TMEvent[];
  };
}
