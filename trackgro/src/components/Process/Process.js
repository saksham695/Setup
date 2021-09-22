import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../apollo/queries";
import ProcessCard from "./ProcessCard";

export default function Process() {
  const { data = {}, loading, error } = useQuery(GET_BOOKS);
  const { books = [] } = data;
  console.log("data", data);
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: 90 }}>
      {books.map((process, index) => {
        return (
          <ProcessCard
            process={process}
            index={index}
            key={process.processId}
            totalProcessesCount={books.length}
          />
        );
      })}
    </div>
  );
}
