import { window, QuickPickItem } from "vscode";

export async function getItemsOption(items: QuickPickItem[]) {
  const selected = await window
        .showQuickPick(items, {
            canPickMany: false,
            placeHolder: "Select using Space or by clicking",
        });
    return selected?.label;
}
