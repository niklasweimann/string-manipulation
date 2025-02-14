class ToUpperCase extends BaseCommand {
  commandName: string = "toUpperCase";

  transformAction(src: string): string {
    return src.toUpperCase();
  }
}