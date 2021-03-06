
class Bottles {

  container(number) {
    if (number === 1) {
      return 'bottle';
    }

    return 'bottles';
  }

  verse(number) {

    switch (number) {
      case 0:
        return (
          `No more bottles of beer on the wall, ` +
          `no more bottles of beer.\n` +
          `Go to the store and buy some more, ` +
          `99 bottles of beer on the wall.\n`
        );
        break;

      case 1:
        return (
          `1 bottle of beer on the wall, ` +
          `1 bottle of beer.\n` +
          `Take it down and pass it around, ` +
          `no more bottles of beer on the wall.\n`
        );
        break;

      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          `Take one down and pass it around, ` +
          `${number - 1} ${this.container(number - 1)} of beer on the wall.\n`
        );
    }
  }

  verses(start, finish) {
    let verses = '';
    let newline = '\n';

    for (let i = start; i >= finish; i--) {
      if (i === finish) { newline = ''; }
      verses = verses + this.verse(i) + newline;
    }

    return verses;
  }

  song() {
    return this.verses(99, 0);
  }
}

module.exports = Bottles;
