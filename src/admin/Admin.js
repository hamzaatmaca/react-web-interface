import React, { useEffect } from "react";
import Swal from "sweetalert2";

const Admin = () => {
  return (
    <div>
      Admin
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.pathname = "/login";
        }}
      >
        çık
      </button>
    </div>
  );
};

export default Admin;
