"use client";

import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import useStore from "../../../store";
import { Database } from "../../../lib/database.types";
type UserType = Database["public"]["Tables"]["profiles"]["Row"];

const Navigation = ({
  session,
  user,
}: {
  session: Session | null;
  user: UserType | null;
}) => {
  const { setUser } = useStore();

  // set user from session
  useEffect(() => {
    setUser({
      id: session ? session.user.id : "",
      email: session ? session.user.email! : "",
      name: session && user ? user.name : "",
      avatar_url: session && user ? user.avatar_url : "",
      is_admin: session && user ? user.is_admin : false,
    });
  }, [session, setUser, user]);

  return (
    <header className="shadow-lg shadow-gray-100">
      <div className="py-5 container max-w-screen-sm mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl cursor-pointer">
          Supabase Account System
        </Link>

        <div className="text-sm font-bold">
          {session ? (
            <div className="flex items-center space-x-5">
              <Link href="/settings/profile">
                <div className="relative w-12 h-12">
                  <Image
                    src={
                      user!.avatar_url
                        ? user!.avatar_url
                        : "/avatars/avatar1.png"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-full object-cover"
                    alt="avatar"
                    priority={true}
                  />
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Link href="/auth/login">ログイン</Link>
              <Link href="/auth/signup">サインアップ</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
