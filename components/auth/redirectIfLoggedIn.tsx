import {supabase} from "@/lib/supabase";

export const redirectIfLoggedIn = async (router: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
        router.push("/dashboard");
    }
};