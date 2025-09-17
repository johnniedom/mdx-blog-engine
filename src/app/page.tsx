import { redirect } from "next/navigation";

export default function Home() {
  // Redirect users hitting the site root to the blog index
  redirect("/blog");
}
