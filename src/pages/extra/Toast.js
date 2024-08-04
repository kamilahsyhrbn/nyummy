import toast from "react-hot-toast";

const showSuccessToast = (message) => {
  return toast(message, {
    style: {
      background: "#28A745",
      color: "#FFFFFF",
      textAlign: "center",
      width: "full",
      borderRadius: "12px",
      fontSize: "14px",
      textAlign: "center",
      padding: "10px 20px",
      width: "full",
      maxWidth: "900px",
    },
  });
};

const showErrorToast = (message) => {
  return toast(message, {
    style: {
      background: "#FF0000",
      color: "#FFFFFF",
      borderRadius: "12px",
      fontSize: "14px",
      textAlign: "center",
      padding: "10px 20px",
      width: "full",
      maxWidth: "900px",
    },
  });
};

export { showSuccessToast, showErrorToast };
