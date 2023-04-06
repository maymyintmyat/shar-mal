import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";

const PassportApp = () => {
  // const [number, setNumber] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState<number>();

  useEffect(() => {
    console.log("inside use effect");
    fetchAvailability();
  }, [selectedMonth]);

  const fetchAvailability = async () => {
    const response = await fetch(
      `http://localhost:5000/availability?month=${selectedMonth}`
    );
    const data = await response.json();
    console.log(data);
  };

  console.log("about to render");
  // return (
  //   <button
  //     onClick={() => {
  //       number < 3 && setNumber(number + 1);
  //     }}>
  //     Click {number}
  //   </button>
  // );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 200, margin: "0 auto", mt: "20" }}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Basic date picker"
            disablePast
            format="DD-MM-YYYY"
            onChange={(value) => {
              const dayjsObj = value as Dayjs;
              const month = dayjsObj.month();
              setSelectedMonth(month);
            }}
          />
        </DemoContainer>
      </Box>
    </LocalizationProvider>
  );
};

export default PassportApp;
