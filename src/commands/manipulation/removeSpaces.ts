class RemoveSpaces extends BaseCommand {
  commandName: string = "removeSpaces";

  transformAction(src: string): string {
    return src.replace(/[ ]{1,}/g, "");
  }
}
