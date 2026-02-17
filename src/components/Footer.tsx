import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import logo from "../assets/logo.png";
import appStore from "../assets/AppStore.png";
import googlePlay from "../assets/GooglePlay.png";
import { footerStyles } from "../styles/footerStyles";

export const Footer = () => {
  return (
    <>
      <Box component="footer" dir="ltr" sx={footerStyles.root}>
        <Box sx={footerStyles.container}>
          <Box sx={footerStyles.gridWrapper}>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={footerStyles.logo}
                />
                <Typography variant="body2" sx={footerStyles.description}>
                  نقطة وصل" هو منصة إلكترونية سورية شاملة، تربط المستخدم بكل ما
                  يحتاجه في حياته اليومية، من عقارات وسيارات إلى خدمات طبية
                  ومنتجات استهلاكية، بطريقة سهلة وآمنة. هدفنا تسهيل الوصول إلى
                  الإعلانات والمنتجات والخدمات ضمن بيئة موثوقة ومنظّمة.{" "}
                </Typography>
              </Box>
              <Stack
                mt={3}
                flexDirection="row"
                gap="0.9rem"
                alignItems="center"
                mr={1}
              >
                <LinkedInIcon
                  sx={{
                    color: "#7A2FA2",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { opacity: 0.7 },
                  }}
                />

                <InstagramIcon
                  sx={{
                    color: "#7A2FA2",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { opacity: 0.7 },
                  }}
                />

                <XIcon
                  sx={{
                    color: "#7A2FA2",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { opacity: 0.7 },
                  }}
                />
              </Stack>
            </Box>
            <Box>
              <Stack spacing={1} height="30vh">
                <Typography sx={footerStyles.menuTitle}>برعاية</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Stack spacing={1}>
                      <Typography sx={footerStyles.link}>
                        مديرية الصناعة والتجارة
                      </Typography>
                      <Typography sx={footerStyles.link}>
                        مديرية الاتصالات
                      </Typography>
                      <Typography sx={footerStyles.link}>
                        مديرية الصحة
                      </Typography>
                      <Typography sx={footerStyles.link}>
                        مديرية التنمية
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack spacing={1}>
                      <Typography sx={footerStyles.link}>ام تي ان</Typography>
                      <Typography sx={footerStyles.link}>سيريتل</Typography>
                      <Typography sx={footerStyles.link}>البراق</Typography>
                      <Typography sx={footerStyles.link}>ايماتيل</Typography>
                      <Typography sx={footerStyles.link}>المتين</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Box>

            <Grid item xs={12} sm={3} md={2}>
              <Typography sx={footerStyles.menuTitle}>تصفح المنصة</Typography>
              <Stack spacing={1}>
                <Link href="#" sx={footerStyles.link}>
                  الأقسام الرئيسية
                </Link>
                <Link href="#" sx={footerStyles.link}>
                  أضف إعلانك
                </Link>
                <Link href="#" sx={footerStyles.link}>
                  تواصل معنا
                </Link>
                <Link href="#" sx={footerStyles.link}>
                  سياسة الخصوصية
                </Link>
                <Link href="#" sx={footerStyles.link}>
                  سياسة الاستخدام
                </Link>
                <Link href="#" sx={footerStyles.link}>
                  الباقات
                </Link>
              </Stack>
            </Grid>

            <Box>
              <Stack spacing={1} height="30vh">
                <Typography variant="h6" sx={footerStyles.menuTitle}>
                  حمل التطبيق 
                </Typography>
                <img
                  src={appStore}
                  alt="App Store"
                  style={{ height: "50px", cursor: "pointer", maxWidth: 120 }}
                />
                <img
                  src={googlePlay}
                  alt="App Store"
                  style={{ height: "50px", cursor: "pointer", maxWidth: 120 }}
                />
              </Stack>
            </Box>
          </Box>

          <Box sx={footerStyles.bottomBar}>
            <Typography variant="caption" sx={footerStyles.copyright}>
              © حقوق النشر 2022، جميع الحقوق محفوظة لـ ClarityUI
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
