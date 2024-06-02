import React from "react";
import AdminNav from "../components/AdminNav";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNav />

      <div className="container my-6"></div>
    </>
  );
}
