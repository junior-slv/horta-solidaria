import axios from "axios";

import { instance } from "../api";

export const fetchHortas = () => {
    return instance
      .get("horta/todas")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };