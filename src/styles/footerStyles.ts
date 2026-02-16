export const footerStyles = {
  root: {
    color: "#fff",
    direction: "rtl",
    background: "linear-gradient(180deg, #F5EEFC 0%, #E4F3FD 100%)",
    mt: 6,
  },
  container: {
    maxWidth: "1280px",
    mx: "auto",

    // px: { xs: 2, md: 3 },
    // py: { xs: 4, md: 6 },
  },
  gridWrapper: {
    pt: 6,
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(4, 1fr)",
    },
    gap: 3,
    justifyItems: "center",
    alignItems: "start",
  },
  logo: {
    width: "67px",
    height: "55",
    mb: 2,
  },
  description: {
    color: "#000002ff",
    lineHeight: 1.6,
    maxWidth: "250px",
    mr: 1,
  },
  menuTitle: {
    mb: "24px !important",
    color: "#7A2FA2",
    fontWeight: 700,
    fontSize: "20px",
  },
  link: {
    color: "#3a3a3fff",
    fontWeight: 400,
    fontSize: "17px",
    textDecoration: "none",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  rightImageBox: {
    display: "flex",
    justifyContent: { xs: "flex-start", md: "flex-end" },
    alignItems: "flex-start",
  },
  rightImage: {
    width: "100%",
    maxWidth: 240,
    height: "auto",
    objectFit: "contain",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    mt: 4,
    py: 2,
  },
  copyright: {
    color: "#9a9aa9",
    display: "block",
    textAlign: "center",
  },
};
