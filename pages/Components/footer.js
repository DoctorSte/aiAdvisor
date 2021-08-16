import "tailwindcss/tailwind.css";

export default function Footer() {
  return (
    <footer className="min-w-full flex justify-center border-t-2 text-gray-500 text-center text-xs p-10">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="self-stretch "
      >
        Powered by
        <img
          src="/Ellipse 1.svg"
          alt="Vercel Logo"
          className=" w-10 self-stretch "
        />
      </a>
    </footer>
  );
}
