import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../lib/database.types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ResetPassword from "@/app/components/reset-password";

const ResetPasswordPage = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }
  return <ResetPassword />;
};

export default ResetPasswordPage;
