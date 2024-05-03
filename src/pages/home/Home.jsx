/** @format */

import { memo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePostFilterContext } from "../../contexts/PostFilterContext";
import { fetchPost } from "../../services/post/fetchPost";
import PostList from "./components/PostList";
import RentalFilterList from "./components/RentalFilterList";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";
import "./home.scss";

const Home = memo(() => {
      const { filterValue } = usePostFilterContext();
      const userToken = localStorage.getItem("token");
      const { isLoading, isFetching, error, data } = useQuery({
            queryKey: ["posts"],
            queryFn: async () =>
                  await fetchPost({
                        page: filterValue?.page,
                        priceMin: filterValue?.price.minValue,
                        priceMax: filterValue?.price.maxValue,
                        areaMin: filterValue?.area.minValue,
                        areaMax: filterValue?.area.maxValue,
                        type: filterValue.type,
                        token: userToken,
                  }),
            refetchOnWindowFocus: false,
            // async () => {
            //   const data = await fetch(`https://bkhostel.hcmut.tech/posts?page=${page}`)
            //   .then(res => res.json())
            //   .then(data => data)
            //   return data
            // }
      });

      const TOTAL_PAGE = 5;
      const [page, setPage] = useState(1);

      const gotoPage = (page) => {
            setPage((_) => {
                  if (page <= 0) return 1;
                  if (page > TOTAL_PAGE) return TOTAL_PAGE;
                  return page;
            });
      };

      return (
            <div className='wrap-home w-full mt-8 flex flex-col items-center min-h-screen'>
                  <div className='container-home mx-auto w-full  max-w-[1200px] content-center'>
                        <RentalFilterList />
                        {isFetching ? (
                              <div className='flex flex-grow flex-col gap-4 px-3 py-3 border border-gray-300 rounded-md background-third h-[200px] '>
                                    <Loading />
                              </div>
                        ) : (
                              <PostList postsInfo={data?.result} totalPost={data?.totalPosts} />
                        )}
                  </div>
                  <Pagination currentPage={filterValue.page} totalPage={5} gotoPage={gotoPage} />
            </div>
      );
});

export default Home;
