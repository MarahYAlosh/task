import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function NewsletterSubscription() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#7A2FA2",
        borderRadius: "24px",
        p: { xs: 3, md: 5 },
        overflow: "hidden",
        width: "75%",
        mx: "auto",
        py: 5
      }}
    >

      <Box
        sx={{
          position: "absolute",
          top: -40,
          left: -40,
          width: { xs: 70, md: 120 },
          height: { xs: 70, md: 120 },
          borderRadius: "50%",
          border: "6px solid #fff",
        }}
      />


      <Box
        sx={{
          position: "absolute",
          bottom: -40,
          right: -40,
          width: { xs: 70, md: 120 },
          height: { xs: 70, md: 120 },
          borderRadius: "50%",
          border: "6px solid #fff",
        }}
      />

      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={{ xs: "20px", md: "26px" }}
        color="#fff"
        mb={4}
      >
        اشترك في النشرة الإخبارية لدينا
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <TextField
          placeholder="البريد الإلكتروني"
          sx={{
            width: { xs: "100%", sm: 320 },
            "& .MuiOutlinedInput-root": {
              height: 48,
              borderRadius: "999px",
              bgcolor: "#fff",
              paddingRight: 2,
              "& fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <MailOutlineIcon sx={{ color: "#999" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#fff",
            color: "#2196F3",
            px: 4,
            height: 48,
            borderRadius: "999px",
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          إرسال
        </Button>
      </Box>
    </Box>
  );
}
