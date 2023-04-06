import { Box, Autocomplete, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Bus, SearchStations } from "../typings/types";
import { busses, stations } from "../utils/data";

function BusApp() {
  const [searchStations, setSearchStations] = useState<SearchStations>({
    startStation: null,
    endStation: null,
  });
  /////////
  const [directBus, setDirectBus] = useState<Bus[] | null>(null);

  const handleOnClick = () => {
    const busWithStartStation = busses.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.startStation?.id
      )
    );

    const busWithEndStation = busses.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.endStation?.id
      )
    );

    const directBus = busWithStartStation.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.endStation?.id
      )
    );
    setDirectBus(directBus);

    console.log("start bus is : ", busWithStartStation);
    console.log("end bus is : ", busWithEndStation);
    console.log("direct bus is: ", directBus);
  };
  /////////////
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 5,
      }}>
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <Autocomplete
          disablePortal
          id="stations"
          options={stations}
          sx={{ width: 300, mb: 2 }}
          onChange={(evt, value) => {
            value &&
              setSearchStations({
                ...searchStations,
                startStation: value,
              });
          }}
          renderInput={(params) => <TextField {...params} label="Stations A" />}
        />

        <Autocomplete
          disablePortal
          id="stations"
          options={stations}
          sx={{ width: 300 }}
          onChange={(evt, value) => {
            value &&
              setSearchStations({
                ...searchStations,
                endStation: value,
              });
          }}
          renderInput={(params) => <TextField {...params} label="Stations B" />}
        />

        <Button variant="outlined" sx={{ mt: 2 }} onClick={handleOnClick}>
          Search Bus
        </Button>
      </Box>
      <Box sx={{ margin: "0 auto", mt: 2, textAlign: "center" }}>
        {searchStations.startStation && (
          <h1>{searchStations.startStation.label}</h1>
        )}
        <h1>To</h1>
        {searchStations.endStation && (
          <h1>{searchStations.endStation.label}</h1>
        )}
      </Box>
      <Box sx={{ margin: "0 auto", mt: 2, textAlign: "center" }}>
        {directBus &&
          directBus?.map((bus) => {
            return <h1>{bus.name}</h1>;
          })}

        {!directBus && <h1>no bus here</h1>}
      </Box>
    </Box>
  );
}

export default BusApp;
