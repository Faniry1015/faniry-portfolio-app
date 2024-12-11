import React from "react";
import { Box } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { Typography, Grid, Paper, Container, useTheme } from "@mui/material";
import aProposLight from "../assets/images/aProposLight.svg";
import aProposDark from "../assets/images/aProposDark.svg";

function APropos() {
  const theme = useTheme();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-250px 0px",
  });

  return (
    <Box component="section" className="mainSection" id="propos" ref={ref}>
      <Paper
        elevation={4}
        sx={{ py: 7, px: 4, bgcolor: theme.palette.background.secondary }}
      >
        <Container component="main" maxWidth="md">
          <Typography variant="h3">A propos de moi</Typography>
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={`zoom-in ${inView ? "active" : ""}  `}
          >
            <Grid item sm={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    theme.palette.mode === "dark" ? aProposDark : aProposLight
                  }
                  alt="web developer"
                  style={{ maxHeight: "250px", maxWidth: "100%" }}
                />
              </Box>
            </Grid>

            <Grid item sm={12} md={7} sx={{ marginBottom: 2 }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", marginBottom: "10px" },
                  }}
                >
                  <strong>
                    Bonjour 👋, je suis Randriaharimino Faniriantsoa !
                  </strong>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", marginBottom: "10px" },
                  }}
                >
                  Développeur passionné, je me spécialise en <strong>React/Next.js</strong>
                  (JavaScript), ainsi qu'en <strong>Flutter</strong> (Dart), pour créer des
                  interfaces utilisateur réactives, responsives et
                  multi-plateformes.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", marginBottom: "10px" },
                  }}
                >
                  <strong>🎯 Mon objectif :</strong> Transformer vos idées en
                  expériences numériques innovantes et intuitives.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      marginBottom: "10px",
                    },
                  }}
                >
                  Toujours curieux et en constante progression, je suis ouvert à
                  de nouvelles opportunités d'apprentissage et de collaboration.
                  🚀
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

export default APropos;
