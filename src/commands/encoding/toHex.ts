class ToHex extends BaseCommand {
  commandName: string = "toHex";

  transformAction(src: string): string {
    if (src.includes("\n")) {
      let numbers = src.split("\n");
      for (const key in numbers) {
        if (!isNaN(parseInt(numbers[key]))) {
          numbers[key] = parseInt(numbers[key]).toString(16);
        }
      }
      return numbers.join("\n");
    } else if (parseInt(src) !== NaN) {
      return parseInt(src).toString(16);
    } else {
      return src;
    }
  }
}
