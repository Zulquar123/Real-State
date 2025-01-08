import About from "./component/About";
import Header from "./component/Header";
import Project from "./component/Project";

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
    </div>
  );
}
