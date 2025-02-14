class Reverse extends BaseCommand {
  commandName: string = "reverse";

  transformAction(src: string): string {
    return src.split("\n")
      .map((x) => x.split("").reverse().join(""))
      .join("\n");
  }
}
