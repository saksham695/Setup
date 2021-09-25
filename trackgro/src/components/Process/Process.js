import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROCESS } from "../../apollo/queries";
import ProcessCard from "./ProcessCard";
import Text from "../SharedText/Text";

export default function Process() {
  const { data = {}, loading, error } = useQuery(GET_PROCESS);
  // { variables: { id: 1 } }
  const { processes = [] } = data;
  console.log("data", data);
  // if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: 90 }}>
      {processes.map((process, index) => {
        return (
          <ProcessCard
            process={process}
            index={index}
            key={process.processId}
            totalProcessesCount={processes.length}
          />
        );
      })}
    </div>
  );
}
