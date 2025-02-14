import * as vscode from "vscode";
import { CasingManager } from "./casingManager";
import { CommandManager } from "./commandManager";
import { getItemsOption } from "./modules/ui";

export function activate(context: vscode.ExtensionContext) {
  for (const iterator of CommandManager.loadCommands()) {
    context.subscriptions.push(
      vscode.commands.registerTextEditorCommand(
        iterator.commandName,
        () => {}
      ));
  }
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "string-manipulation.changeCasing",
      async (x: string) => {
        const casingAction = await getItemsOption(
          CasingManager.buildQuickPickItems()
        );
      }
    )
  );
  
}

// this method is called when your extension is deactivated
export function deactivate() {}
