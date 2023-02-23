import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function faqs() {
  return (
    <div style={{ textAlign: "center" }}>
      <Stack container spacing={2} mt={3}>
        <Typography mt={2} variant="h3" color="text">
          Still Have Questions?
        </Typography>
        <Typography mt={2} variant="body2" color="text">
          Reach out to our knowledgeable Support Desk
        </Typography>
        <Button
          variant="contained"
          style={{ margin: "1rem 7rem", textAlign: "center" }}
          color="white"
        >
          Contact Us
        </Button>
      </Stack>
    </div>
  );
}

export default faqs;
