"use client";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "@/utils/fetcher";
// import "swiper/css";
export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      hello
      {data.map((item) => (
        <div>hello {item.title}</div>
      ))}
    </div>
  );
}
