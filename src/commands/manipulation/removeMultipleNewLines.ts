class RemoveMultipleNewLines extends BaseCommand {
  commandName: string = "removeMultipleNewLines";

  transformAction(src: string): string {
    return src.replace(/[\r\n]{2,}/g, "\n\n");
  }
}
