import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialData = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialData);
  const [allOn, setAllOn] = useState(false);
  const [allOff, setAllOff] = useState(false);

  function toggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function toggleAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
    setAllOn(true);
    setAllOff(false);
  }
  function toggleAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
    setAllOff(true);
    setAllOn(false);
  }

  return (
    <Layout isDimmed={allOff}>
      <GlobalStyle />
      <Component
        lights={lights}
        allOn={allOn}
        allOff={allOff}
        toggleLight={toggleLight}
        toggleAllOn={toggleAllOn}
        toggleAllOff={toggleAllOff}
        {...pageProps}
      />
    </Layout>
  );
}
