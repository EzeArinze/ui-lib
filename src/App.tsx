import Button from "./components/button";

function App() {
  return (
    <>
      <div>Hello World</div>
      <section className="flex justify-center items-center w-full gap-2">
        <Button variant={"primary"}>primary</Button>
        <Button>default</Button>
        <Button variant={"destructive"}>Cancle</Button>
        <Button variant={"warning"}>Warning</Button>
        <Button variant={"primary"} disabled>
          Disabled
        </Button>
      </section>
    </>
  );
}

export default App;
