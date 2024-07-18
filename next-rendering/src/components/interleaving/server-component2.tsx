import React from "react";
import fs from "fs";

export const ServerComponent2 = () => {
  fs.readdirSync(
    "src/app/components/interleaving/server-component2.tsx",
    "utf-8"
  );
  
  return <h1>Server Component 2</h1>;
}

