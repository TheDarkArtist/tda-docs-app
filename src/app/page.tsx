import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen flex flex-col gap-y-2 justify-center items-center">
      <p className="text-3xl">hello world</p>
      <Link className="text-blue-600" href="/docs/123">go to /docs/123</Link>

    </div>
  );
};

export default Home;
