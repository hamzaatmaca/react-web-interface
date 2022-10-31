import { postData } from "../utils/fetch";
import Swal from "sweetalert2";
const loginServices = async (data) => {
  await postData("/login", { data: data })
    .then((data) => {
      if (data.token != undefined && data.token != null && data.token != "") {
        localStorage.setItem("token", JSON.stringify(data.token));
        window.location.pathname = "/admin";
      } else {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "danger",
          title: "<span style='color:orange'>Yetkisiz Giriş</span>",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default loginServices;
