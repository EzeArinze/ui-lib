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
import ProgressBar from "./components/progress-bar";
import NueSlider from "./components/slider";

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
                {[...Array(4)].map((_, i) => (
                  <li key={i}>{i + 1}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="space-x-2">
              <NueSlider defaultValue={25} />
            </CardFooter>
          </Card>
        </div>

        <div className="mx-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <h1>Progress bar</h1>
              </CardTitle>
              <CardDescription>
                <p>Simple vertcal/horizontal bar</p>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 flex gap-4 h-36">
              <ProgressBar value={15} max={100} orientation={"vertical"} />
              <ProgressBar value={25} orientation={"vertical"} />
              <ProgressBar value={55} orientation={"vertical"} />
            </CardContent>
            <CardContent className="space-y-4 ">
              <ProgressBar value={15} max={100} />
              <ProgressBar value={25} />
              <ProgressBar value={55} />
            </CardContent>
            <CardFooter className="space-x-2"></CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
