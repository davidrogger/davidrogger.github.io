export function replaceWordPageFromPhrase(phrase:string, newWord:string) {
  return phrase.replace('{{page}}', newWord);
}
