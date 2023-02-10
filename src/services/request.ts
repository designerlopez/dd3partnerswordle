import { WORDS } from "./words";

function getWords() {
  return WORDS;
}

async function getWordss() {
  try {
    const data = await fetch("../../data.json");
    const words = await data.json();
    const filterParse = JSON.parse(words).filter((data: any) => {
      return (
        data.length === 5 &&
        !data.includes("á") &&
        !data.includes("é") &&
        !data.includes("í") &&
        !data.includes("ó") &&
        !data.includes("ú")
      );
    });
    return filterParse;
  } catch (error) {
    console.log(error);
  }
}

//obtener palabra aleatoria sin repetir
export async function getWordOfDay() {
  const words: string[] = await getWordss();
  let numberRandom: Number = Math.trunc(Math.random() * 300);
  const wordOfDay: string = words[numberRandom as any];
  

  return wordOfDay.toUpperCase();
}

export async function isValidWord(word: string) {
  const words = getWords();
  return words.includes(word.toLowerCase());
}

function getDayOfTheYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    (now as any) -
    (start as any) +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
