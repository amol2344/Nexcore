import { lazy, Suspense, useState } from "react";

const HomeDescription = lazy(() => import("./HomeDescription"));

export default function Home() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);

  return (
    <main>
      <h1>Home</h1>
      <button onClick={toggle}>{show ? "Hide" : "Show"} description</button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <HomeDescription />}
      </Suspense>
    </main>
  );
}