/** @format */

import { makeRequest } from "../makeRequest";

export async function fetchLikedPost({ userToken, page }) {
      const response = await makeRequest("/posts/favorite", {
            mode: "cors",
            headers: {
                  Authorization: `Bearer ${userToken}`,
            },
            params: {
                  page: page,
            },
      });

      return response;
}
