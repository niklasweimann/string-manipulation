import * as vscode from "vscode";
class EditorService {
  replaceSelection(action: (s: string) => string) {
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
}