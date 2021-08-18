import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function chooseHelper() {
  return (
    <>
      <h1>Here you choose a helper</h1>
      <Link href="/">
        <a className="text-blue-500 bold caret-red-200">Go back home</a>
      </Link>
    </>
  );
}
