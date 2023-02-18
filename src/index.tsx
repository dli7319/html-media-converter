import React from "react";
import { createRoot } from "react-dom/client";
import MediaConverter from "./MediaConverter";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<MediaConverter />);