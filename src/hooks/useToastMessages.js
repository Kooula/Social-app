import { useEffect, useState } from "react";
import ToastMessage from "../components/toast-messages/ToastMessage";

const useToastMessages = () => {
  const [toastData, setToastData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setToastData(null);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [toastData]);

  const showToast = ({ message, backgroundColor }) => {
    setToastData({ message, backgroundColor });
    setIsVisible(true);
  };

  const closeToast = () => {
    setIsVisible(false);
  };

  const onReportClickToast = () => {
    showToast({
      message: "Post has been successfully reported.",
      backgroundColor: "red",
    });
  };

  const onBookMarkClickToast = () => {
    showToast({
      message: "Post has been added to bookmarks",
      backgroundColor: "blue",
    });
  };

  return {
    showToast,
    closeToast,
    onReportClickToast,
    onBookMarkClickToast,
    ToastText: <ToastMessage {...toastData} isVisible={isVisible} />,
  };
};

export default useToastMessages;
