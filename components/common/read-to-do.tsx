"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ToDo } from "@/lib/utils/types";

import { ReadToDoList } from "@/components/common/read-to-do-list";

export const ReadToDo = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["userToDo"],
    queryFn: async () => {
      const { data } = await axios.get("/api/todo/read");
      return data as ToDo[];
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>An unknown error has occured.</span>;
  }

  return (
    <div className="mx-auto">
      {data.map((todo, index) => (
        <ReadToDoList key={index} {...todo} />
      ))}
    </div>
  );
};
