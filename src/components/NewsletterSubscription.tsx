import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Stack,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function NewsletterSubscription() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#7A2FA2",
        borderRadius: "24px",
        overflow: "hidden",
        width: "100%",
        mx: "auto",
        py: 5,
        maxWidth: "1280px",
        mt: 10,
        height: "205px",
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
      <Stack
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography
          textAlign="center"
          fontWeight={700}
          fontSize={{ xs: "20px", md: "26px", lg: "36px" }}
          color="#fff"
          mb={4}
        >
          اشترك في النشرة الإخبارية لدينا
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <TextField
            placeholder="البريد الإلكتروني"
            sx={{
              width: { xs: "100%", sm: 320, lg: 448 },
              "& .MuiOutlinedInput-root": {
                height: 56,
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
                <InputAdornment position="center">
                  <MailOutlineIcon sx={{ color: "#999" }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: { xs: "auto", md: "150px", lg: "192px" },
              bgcolor: "#fff",
              color: "#21A7DB",
              px: 4,
              height: 56,
              borderRadius: "999px",
              fontSize: { xs: "15px", md: "15px", lg: "18px" },
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#f5f5f5",
              },
            }}
          >
            إرسال
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
