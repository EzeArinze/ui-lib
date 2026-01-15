import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import Button from "./components/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
// import Input from "./components/input";
import Nav from "./components/nav";
import ProgressBar from "./components/progress-bar";
// import NueSlider from "./components/slider";
// import {
//   NueTabs,
//   Tab,
//   TabsIndicator,
//   TabsList,
//   TabsPanels,
// } from "./components/tabs";
import { useState } from "react";

function App() {
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <main>
      <Nav />

      {/*Hero Section*/}
      <section className="max-w-4xl px-8 py-12 mx-auto text-center">
        <h1 className="font-semibold md:text-3xl text-xl tracking-tight">
          Beautifull components with neomorphic ui
        </h1>
        <p className="md:text-lg text-sm text-muted-foreground mt-1 ">
          Crafted with love and attention to detail built on base-ui, with
          TailwindCSS, Accessible, Customizable and ready to use in your project
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-8 my-12">
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Music Player</CardTitle>
              <CardDescription>
                Enjoy high quality music streaming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 flex flex-col  justify-center items-center">
                <img
                  className={`w-56 h-56 rounded-full shadow-raised border-4 border-border ${isPlaying && "animate-spin"}`}
                  alt="godzilla"
                  src="https://i.pinimg.com/originals/65/82/a5/6582a5aa981283c552c30f7f5707714c.jpg"
                />

                <div className="text-center space-y-2">
                  <h2 className="text-lg font-semibold text-foreground">
                    Feel good inc
                  </h2>
                  <p className="text-sm text-muted-foreground">Moon</p>
                  <div>
                    <ProgressBar value={45} max={100} className={"max-w-xs"} />
                    <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>3:32</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Button
                      aria-label="previous button"
                      size={"icon"}
                      shape={"full"}
                      variant={"primary"}
                    >
                      <SkipBack className="size-4" />
                    </Button>
                    <Button
                      aria-label={isPlaying ? "pause" : "play"}
                      size={"icon"}
                      shape={"full"}
                      variant={"primary"}
                      className="w-20 h-12"
                      onClick={() => setisPlaying((prev) => !prev)}
                    >
                      {isPlaying ? (
                        <Pause className="size-4" />
                      ) : (
                        <Play className="size-4" />
                      )}
                    </Button>
                    <Button
                      aria-label="forward button"
                      size={"icon"}
                      shape={"full"}
                      variant={"primary"}
                    >
                      <SkipForward className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 space-y-6"></div>
      </section>
    </main>
  );
}

export default App;
