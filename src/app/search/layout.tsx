import React from "react";
import SearchHeader from "./../components/searchHeader";  // Make sure the path is correct
import "./../globals.css";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
