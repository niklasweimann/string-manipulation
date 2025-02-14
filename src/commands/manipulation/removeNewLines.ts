class RemoveNewLines extends BaseCommand {
  commandName: string = "removeNewLines";

  transformAction(src: string): string {
    return src.replace(/[\r\n]{1,}/g, "");
  }
}
