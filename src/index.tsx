import { Text, Window, hot, View, Renderer } from "@nodegui/react-nodegui";
import React from "react";

const minSize = { width: 500, height: 600 };

const App = () => {
  return (
    <Window styleSheet={styleSheet} minSize={minSize} windowTitle="Calculator">
      <View id="rootView">
        <View id="label"></View>
        <View id="calBtn"></View>
        <View id="calBtn"></View>
        <View id="calBtn"></View>
      </View>
    </Window>
  );
};

const styleSheet = `
  #rootView{
    height: '100%';
    background-color: blue;
  }

  #label {
    background-color: white;
    flex: 1;
  }

  #calBtn {
    background-color: #222;
    flex: 1;
  }
`;

Renderer.render(<App />);