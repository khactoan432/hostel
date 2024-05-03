/** @format */

import axios from "axios";

const axiosInstance = axios.create({
      mode: "cors",
      baseURL: "https://bkhostel.hcmut.tech",
});

export async function makeRequest(url, requestOption) {
      const response = await axiosInstance(url, requestOption)
            .then((res) => res.data)
            .catch((err) => console.log("**Error**: ", err));

      return response;
}
