function wordsToMarks(string){
 const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.split('')]
 return string.split('').reduce((acc, char) => acc += alphabet.indexOf(char )+1,0);
}