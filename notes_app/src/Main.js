
import React from 'react';
import FileUpload from "./FileUpload";
import TagsInput from "./components/TagsInput"
import ReactDOM from "react-dom";
import { saveAs } from "file-saver";

function Main({ activeNote, onUpdateNote }) {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    }

    if (!activeNote) return <div className="no-active-note">No note selected</div>

    function exportFile() {
        let data = activeNote.body;
      
        var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "notita.txt");
      }

      function Export() {
        return (
          <div className="Export">
            <button onClick={() => exportFile()}>exportFile</button>
          </div>
        );
      }

    return (<div className="app-main">

        <div className="app-main-note-edit">

            <input type="text" id="title" value={activeNote.title}
                onChange={(e) => onEditField("title", e.target.value)}
                autoFocus></input>

            <textarea id="body"
                placeholder="Insert your notes here"
                value={activeNote.body}
                onChange={(e) => onEditField("body", e.target.value)}
            ></textarea>

        </div>

        <div className="app-main-note-img-doc">
            <FileUpload />

            <div>
                <h2>Enter Some Tags ...</h2>
                <TagsInput />
            </div>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <div><Export /></div>

    </div>
    );
}

export default Main;