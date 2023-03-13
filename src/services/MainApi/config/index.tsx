import axios from "axios";

//const token =
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjAyY2RiZGYwOTNiY2VjNzNlYzlhMCIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3ODIzOTU5NiwiZXhwIjoxNjc4ODQ0Mzk2fQ.nIy0RQvcfgREcLzzGiuFKGikwhw0znhpy8exTxlNUuc";

const token = localStorage.getItem("token");

const baseAPI = axios.create({
  baseURL: "https://gamaxp-desafio4-grupo6.onrender.com",

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default baseAPI;
