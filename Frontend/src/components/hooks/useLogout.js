import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

	const logout = async () => {
    console.log("Logout function called");
		setLoading(true);
		try {
			const res = await fetch("/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
      console.log("Logout response:", data);

      if (data.error && data.error !== "Logged out successfully") {
        throw new Error(data.error);
      }

			localStorage.removeItem("chat-user");
			setAuthUser(null);
      navigate("/login");

		} catch (error) {
      console.log("Logout error:", error.message);
			toast.error(error.message);

		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;