import axios from "axios";

import { instance } from "../api";

export const fetchObjetivos = () => {
    return instance
      .get("objetivo/todos")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };