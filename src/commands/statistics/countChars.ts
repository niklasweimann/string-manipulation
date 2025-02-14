class CountChars extends BaseCommand {
  commandName: string = "countChars";

  transformAction(src: string): string {
    return src.length.toString();
  }
}
