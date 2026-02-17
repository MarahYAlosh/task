import { Box, TextField, Stack, Button, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { searchFieldStyle } from "../../styles/headerStyles";
interface Props {
  active: string;
  onFilter: (label: string) => void;
}

export default function ChatFilters({ active, onFilter }: Props) {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        maxWidth: "1280px",
        // px: 2,
        pt: 2,
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: { xs: "2%", md: "0%" },
        alignItems: "center",
        justifyContent: "flex-start",
        mx: "auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        gap={2}
        sx={{
          alignItems: "center",
          width: { xs: "90%", sm: "55%", md: "65%", lg: "41%" },
        }}
      >
        {["الكل", "المقروءة", "غير المقروءة"].map((label) => (
          <Button
            key={label}
            variant={active === label ? "contained" : "outlined"}
            sx={{
              borderRadius: 5,
              fontSize: { xs: "16px", sm: "13px", md: "15px", lg: "16px" },
              px: 2.5,
              py: 1,
              height: "max-content",
              ...(active === label
                ? {
                    background: "#21A7DB",
                  }
                : { border: "1px solid #EAEAEB" }),
            }}
            onClick={() => onFilter(label)}
          >
            {label}
          </Button>
        ))}
      </Stack>
      <Box
        sx={{
          alignItems: "center",
          width: { xs: "90%", sm: "45%", md: "100%" },
        }}
      >
        <TextField
          fullWidth
          placeholder="البحث في الرسائل"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlinedIcon
                  style={{ color: "#757779", marginLeft: "20px" }}
                />
              </InputAdornment>
            ),
            sx: {
              textAlign: "left",
              fontSize: "16px",
            },
          }}
          sx={{ ...searchFieldStyle, width: "90%", padding: "16px 20px" }}
        />
      </Box>
    </Box>
  );
}
