import Button from "./components/button";
import Nav from "./components/nav";

function App() {
  return (
    <main>
      <Nav />
      {/*BUTTON*/}
      <section className="flex justify-center items-center w-full space-x-2 space-y-2">
        <Button variant={"primary"}>primary</Button>
        <Button>default</Button>
        <Button variant={"destructive"}>Cancle</Button>
        <Button variant={"warning"}>Warning</Button>
        <Button variant={"primary"} disabled>
          Disabled
        </Button>
      </section>

      {/*CARD*/}
      <section></section>
    </main>
  );
}

export default App;
