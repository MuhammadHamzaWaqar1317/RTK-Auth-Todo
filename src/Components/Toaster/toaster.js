import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const showError = () => {
  console.log("In show Error func");
  toast.error("Incorrect Username or Password", {
    position: "top-right",

    theme: "dark",
    toastId: "toast",
    delay: 0,
    // hideProgressBar: false,
    // autoClose: false,
    closeOnClick: true,
  });
};

export default showError;
