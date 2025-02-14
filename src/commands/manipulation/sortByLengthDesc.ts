class SortByLengthDesc extends BaseCommand {
  commandName: string = "sortByLengthDesc";

  transformAction(src: string): string {
    return src
    .split("\n")
    .sort((a, b) => b.length - a.length)
    .join("\n");
  }
}
