import * as vscode from "vscode";
import { Md5 } from "./md5";

export function activate(context: vscode.ExtensionContext) {
  function registerComand(commandName: string, action: (s: string) => string) {
    context.subscriptions.push(
      vscode.commands.registerCommand(commandName, () => {
        replaceSelection(action);
      })
    );
  }

  function replaceSelection(action: (s: string) => string) {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const document = editor.document;
    for (const selection of editor.selections) {
      if (selection.isEmpty) {
        const documentText = document.getText();
        const result = action(documentText);
        const fullRange = new vscode.Range(
          document.positionAt(0),
          document.positionAt(document.getText().length - 1)
        );
        editor.edit((editBuilder) => {
          editBuilder.replace(fullRange, result);
        });
      } else {
        const selectedText = document.getText(selection);
        const result = action(selectedText);
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, result);
        });
      }
    }
  }

  const functions: { command: string; action: (s: string) => string }[] = [
    {
      command: "string-manipulation.reverse",
      action: (x: string) =>
        x
          .split("\n")
          .map((x) => x.split("").reverse().join(""))
          .join("\n"),
    },
    {
      command: "string-manipulation.countChars",
      action: (x: string) => x.length.toString(),
    },
    {
      command: "string-manipulation.casingToLower",
      action: (x: string) => x.toLowerCase(),
    },
    {
      command: "string-manipulation.casingToUpper",
      action: (x: string) => x.toUpperCase(),
    },
    {
      command: "string-manipulation.casingInvert",
      action: (x: string) =>
        [...x]
          .map((char) =>
            char === char.toUpperCase()
              ? char.toLowerCase()
              : char.toUpperCase()
          )
          .join(""),
    },
    {
      command: "string-manipulation.removeSpaces",
      action: (x: string) => x.replace(/[ ]{1,}/g, ""),
    },
    {
      command: "string-manipulation.removeMultipleSpaces",
      action: (x: string) => x.replace(/[ ]{2,}/g, " "),
    },
    {
      command: "string-manipulation.removeMultipleNewLines",
      action: (x: string) => x.replace(/[\r\n]{2,}/g, "\n\n"),
    },
    {
      command: "string-manipulation.removeNewLines",
      action: (x: string) => x.replace(/[\r\n]{1,}/g, ""),
    },
    {
      command: "string-manipulation.toMd5",
      action: (x: string) => Md5.hashStr(x, false)
    },
    {
      command: "string-manipulation.sortByLengthDesc",
      action: (x: string) => x.split("\n").sort((a, b) => b.length - a.length).join("\n")
    },
    {
      command: "string-manipulation.sortByLengthAsc",
      action: (x: string) => x.split("\n").sort((a, b) => a.length - b.length).join("\n")
    },
    {
      command: "string-manipulation.toHex",
      action: (x: string) => {
        if(x.includes("\n")){
          let numbers = x.split("\n");
          for (const key in numbers) {
            if(!isNaN(parseInt(numbers[key]))){
              numbers[key] = parseInt(numbers[key]).toString(16);
            }
          }
          return numbers.join("\n");
        }
        else if(parseInt(x) !== NaN){
          return parseInt(x).toString(16);
        }
        else
        {
          return x;
        }
      }
    }
  ];
  for (const element of functions) {
    registerComand(element.command, element.action);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
