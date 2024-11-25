import { auth } from "@/auth";
import { redirect } from "next/navigation";
import StartupForm from "@/components/StartupForm";

export default async function CreatePage() {
  const session = await auth();

  if (!session) redirect("/");
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
}
