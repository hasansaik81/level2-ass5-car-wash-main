import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    
    // baseUrl: "http://localhost:5000/api",
    baseUrl: "https://level-2-ass-3-server-car-wash.vercel.app/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Rating", "Service", "Slot", "User", "Booking"],
  endpoints: () => ({}),
});

export default baseApi;
