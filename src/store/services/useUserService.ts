import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/reduxHook";
import { getAllUsers, getUserById } from "@/store/actions/userActions";
import { User } from "../types/userTypes";

export const useUserData = () => {
  const dispatch = useAppDispatch();
  const { allUsers, userDetail, loading } = useAppSelector(
    (state) => state.user
  );
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (allUsers.length && !userDetail && !selectedUserId) {
      const firstUserId = allUsers[0].user_id;
      setSelectedUserId(firstUserId);
    }
  }, [allUsers, userDetail, selectedUserId]);

  useEffect(() => {
    if (selectedUserId) {
      dispatch(getUserById(selectedUserId));
    }
  }, [dispatch, selectedUserId]);

  return { userDetail, loading };
};
