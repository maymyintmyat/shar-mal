import "./App.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

function App() {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 200,
          margin: "0 auto",
          mt: 20,
        }}>
        <Button variant="contained" sx={{ mb: 2 }}>
          <a
            href="/buss"
            style={{
              textDecoration: "none",
              color: "white",
              width: "100%",
            }}>
            Bus App
          </a>
        </Button>
        <Button variant="contained" sx={{ mb: 2 }}>
          <a
            href="/passport"
            style={{
              textDecoration: "none",
              color: "white",
              width: "100%",
            }}>
            Passpoart App
          </a>
        </Button>
      </Box>
    </Box>
  );
}

export default App;
