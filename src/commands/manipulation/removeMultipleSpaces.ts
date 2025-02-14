class RemoveMultipleSpaces extends BaseCommand {
  commandName: string = "removeMultipleSpaces";

  transformAction(src: string): string {
    return src.replace(/[ ]{2,}/g, " ");
  }
}
