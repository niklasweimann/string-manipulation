class ToLowerCase extends BaseCommand {
  commandName: string = "toLowerCase";

  transformAction(src: string): string {
    return src.toLowerCase();
  }
}