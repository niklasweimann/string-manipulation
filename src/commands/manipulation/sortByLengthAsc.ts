class SortByLengthAsc extends BaseCommand {
  commandName: string = "sortByLengthAsc";

  transformAction(src: string): string {
    return src
      .split("\n")
      .sort((a, b) => a.length - b.length)
      .join("\n");
  }
}
