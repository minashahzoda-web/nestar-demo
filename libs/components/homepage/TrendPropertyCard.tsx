import React from "react";
import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
        style={{
          backgroundImage: "url('/img/banner/types/apartment.webp')",
        }}
      >
        <div>$10</div>
      </Box>

      <Box className="info">
        <strong className="title">Kingston Buildings</strong>
        <p className="desc">no description</p>

        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="bed" />
            <span>2 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="room" />
            <span>5 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="size" />
            <span>150 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
        <p>Rent</p>

        <div className="view-like-box">
          <IconButton color={"default"}>
            <RemoveRedEyeIcon />
          </IconButton>
          <Typography className="view-cnt">100</Typography>

          <IconButton color={"default"}>
            <FavoriteIcon className="favorite" />
          </IconButton>
          <Typography className="view-cnt">100</Typography>
        </div>
      </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
