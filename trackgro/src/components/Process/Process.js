import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROCESS } from "../../apollo/queries";
import ProcessCard from "./ProcessCard";
import Text from "../SharedText/Text";

export default function Process({ productId }) {
  const {
    data = {},
    loading,
    error,
  } = useQuery(GET_PROCESS, {
    variables: { id: productId },
  });
  // { variables: { id: 1 } }
  const { GetAllProcesses = [] } = data;
  // if (error) return <p>{error.message}</p>;
  // if (loading) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: 90 }}>
      {GetAllProcesses.map((process, index) => {
        return (
          <ProcessCard
            process={process}
            index={index}
            key={process.processId}
            totalProcessesCount={GetAllProcesses.length}
          />
        );
      })}
    </div>
  );
}
