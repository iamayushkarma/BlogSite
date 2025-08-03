import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 shadow-2xl"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
