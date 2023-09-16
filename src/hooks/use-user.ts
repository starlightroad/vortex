import type { DefaultUser } from "next-auth";
import { useSession } from "next-auth/react";

export default function useUser() {
  const { data, status, update } = useSession();

  const updateUser = async (userData: Omit<DefaultUser, "id">) => {
    await update(userData);
    await update();
  };

  return {
    user: data?.user,
    isSignedIn: status === "authenticated" ? true : false,
    update: updateUser,
  };
}
