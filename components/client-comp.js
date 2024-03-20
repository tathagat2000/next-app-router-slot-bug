"use client";
import { Children } from "react";

const Slot = () => null;

const Layout = ({ children }) => {
  const childrenArr = Children.toArray(children);

  const mainSlot = childrenArr.find((child) => child?.props?.name === "main");
  const bannerSlot = childrenArr.find(
    (child) => child?.props?.name === "banner"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "100px",
      }}
    >
      <div style={{ fontSize: "40px" }}>{bannerSlot?.props?.children} </div>
      <div style={{ fontSize: "10px" }}>{mainSlot?.props?.children} </div>
    </div>
  );
};

Layout.Slot = Slot;

export { Layout };
