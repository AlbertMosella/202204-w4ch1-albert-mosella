import Button from "./components/Button/Button";
import Info from "./components/Info/Info";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemen from "./gentlemen";

let numberGentlemen = 0;

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info
          numberGentlemans={numberGentlemen}
          text={" gentlemen pointing at you"}
        />
        <Button buttonText={"Selecte all"} />
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman
            alternativeText={gentlemen[0].alternativeText}
            initialName={"B"}
            name={gentlemen[0].name}
            profession={gentlemen[0].profession}
            status={gentlemen[0].status}
            twitter={gentlemen[0].twitter}
            picture={"./img/bertin.jpg"}
          />
          <Gentleman
            alternativeText={gentlemen[0].alternativeText}
            initialName={"F"}
            name={gentlemen[1].name}
            profession={gentlemen[1].profession}
            status={gentlemen[1].status}
            twitter={gentlemen[1].twitter}
            picture={"./img/fary.jpg"}
          />
          <Gentleman
            alternativeText={gentlemen[2].alternativeText}
            initialName={"J"}
            name={gentlemen[2].name}
            profession={gentlemen[2].profession}
            status={gentlemen[2].status}
            twitter={gentlemen[2].twitter}
            picture={"./img/julio.jpg"}
          />
        </ul>
      </main>
    </div>
  );
}

export default App;
