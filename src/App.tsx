import Button from "./components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import Nav from "./components/nav";

function App() {
  return (
    <main>
      <Nav />
      {/*BUTTON*/}
      <section className="mx-4 space-x-2 space-y-2">
        <Button variant={"primary"}>primary</Button>
        <Button>default</Button>
        <Button variant={"destructive"}>Cancle</Button>
        <Button variant={"warning"}>Warning</Button>
        <Button variant={"primary"} disabled>
          Disabled
        </Button>

        {/*CARD*/}
        <div className="mx-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <h1>Hello world</h1>
              </CardTitle>
              <CardDescription>
                <p>What are you listening to ?</p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul>
                {[...Array(6)].map((_, i) => (
                  <li key={i}>{i + 1}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Numbers</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
