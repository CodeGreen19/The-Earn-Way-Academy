import React, { useEffect, useState } from "react";
import del from "../../assets/svg/delete.svg";
import edit from "../../assets/changePassSvg/confirmPass.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  AllUsersAction,
  DeleteUserAction,
  UpdateRoleAction,
} from "../../redux/action/userAction";

function AllUsers() {
  const { adminUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editRole, setEditRole] = useState("");
  const [selectRole, setSelectRole] = useState("user");
  const handleEdit = (user) => {
    console.log(selectRole, user._id);
    dispatch(UpdateRoleAction(user._id, selectRole)).then(() => {
      dispatch(AllUsersAction());
      setEditRole("");
    });
  };
  const handleDelete = (user) => {
    dispatch(DeleteUserAction(user._id)).then(() => {
      dispatch(AllUsersAction());
    });
  };
  useEffect(() => {
    dispatch(AllUsersAction());
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <div className="w-[98vw] overflow-x-scroll lg:pl-6 lg:pr-[240px]">
      <div className=" m-auto min-h-screen w-[680px] p-3  lg:w-[800px] ">
        <ul className="all_user_ul ">
          <li className="font-bold text-[1.rem]">Name</li>
          <li className="font-bold text-[1.rem]">Email/Phone</li>
          <li className="font-bold text-[1.rem]">Role</li>
          <li className="font-bold text-[1.rem]">Delete/Update</li>
          {adminUsers &&
            adminUsers.map((user) => (
              <>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>
                  {editRole === user._id ? (
                    <>
                      <select onChange={(e) => setSelectRole(e.target.value)}>
                        <option value="user">user</option>{" "}
                        <option value="admin">admin</option>
                      </select>
                      <button
                        onClick={() => handleEdit(user)}
                        className="rounded-md bg-[tomato] px-2 py-1 text-[white]"
                      >
                        Update
                      </button>
                    </>
                  ) : (
                    user.role
                  )}
                </li>
                <li className="flex items-center justify-evenly gap-2">
                  <img
                    src={edit}
                    onClick={() => setEditRole(user._id)}
                    className="w-[25px] cursor-pointer"
                    alt="editImg"
                  />
                  <img
                    src={del}
                    onClick={() => handleDelete(user)}
                    className="w-[25px] cursor-pointer"
                    alt="deletelImgae"
                  />
                </li>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default AllUsers;
