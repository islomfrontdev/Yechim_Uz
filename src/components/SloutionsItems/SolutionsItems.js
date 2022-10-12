import { Container, Grid } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { solutions } from "../../Data/Data";

const SolutionsItems = () => {
  const links = [
    {
      title: "Tezkor tugmalar",
      link: "https://www.canva.com/design/DAFOzvxR4cI/W6ke0gyjNYQ9M0qJzhQcQg/view?utm_content=DAFOzvxR4cI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "IT Nima?",
      link: "https://www.canva.com/design/DAFGdpoTUO0/fJUpU9cRovvNWxpJUVcC5A/view?utm_content=DAFGdpoTUO0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton#3",
    },
    {
      title: "Frontend Nima?",
      link: "https://www.canva.com/design/DAFO0dm_Sas/EohMKpdCUkeT_s4y-rCA3Q/view?utm_content=DAFO0dm_Sas&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  ];
  const { solutionId } = useParams();

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between">
          <div className="searchBox">
            <input placeholder="Search" className="searchInput" />
            <button>
              <BsSearch color="#fff" />
            </button>
          </div>
          <button className="backBtn">
            <Link to={"/solutions"}>Orqaga</Link>
          </button>
        </div>
        {solutionId === "Power Point, Google Slides" ? (
          <Grid container spacing={3}>
            {links.map((link) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={link.title}>
                <div className="link_box">
                  <p>{link.title}</p>
                  <a target="_blank" href={link.link}>
                    Batafsil
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <h1>{solutionId}</h1>
        )}
      </Container>
    </div>
  );
};

export default SolutionsItems;
