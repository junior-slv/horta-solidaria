import Sidebar from "@/components/Sidebar";
import React from "react";

const Users = () => {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="flex">
          <div>usuarios</div>
        </div>
      </main>
    </>
  );
};

export default Users;
