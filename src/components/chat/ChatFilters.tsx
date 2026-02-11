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
        px: 2,
        py: 2,
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem"
      }}
    >

      <Stack direction="row" spacing={1} width="55%" justifyContent="center" gap="5%">
        {["الكل", "المقروءة", "غير المقروءة"].map(label => (
          <Button
            key={label}
            size="small"
            variant={active === label ? "contained" : "outlined"}
            sx={{
              borderRadius: 5, px: 3, py: 1.2, height: "max-content", ...(active === label ? {
                background: "#21A7DB",
              } : { border: "1px solid #EAEAEB" }),
            }}
            onClick={() => onFilter(label)}

          >
            {label}
          </Button>
        ))}
      </Stack>

      <TextField
        fullWidth
        placeholder="البحث في الرسائل"
        size="small"


        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon style={{ color: "#444" }} />
            </InputAdornment>
          ),
          sx: {
            textAlign: "right",
            fontSize: "16px",
          },
        }}
        sx={searchFieldStyle}

      />

    </Box>
  );
}
