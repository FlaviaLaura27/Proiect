import React from "react";
import ReactDOM from "react-dom";
import { saveAs } from "file-saver";
import "./styles.css";

function exportFile() {
  let lyrics =
    "But still I'm having memories of high speeds when the cops crashed\n" +
    "As I laugh, pushin the gas while my Glocks blast\n" +
    "We was young and we was dumb but we had heart";

  var blob = new Blob([lyrics], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "testfile1.txt");
}

function Export() {
  return (
    <div className="Export">
      <button onClick={() => exportFile()}>exportFile</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
