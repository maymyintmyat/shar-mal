export interface Movie {
  label: string;
  year: number;
}

export interface Station {
  id: number;
  label: string;
}

export interface SearchStations {
  startStation: Station | null;
  endStation: Station | null;
}

export interface Bus {
  id: number;
  name: string;
  stations: Station[];
}
