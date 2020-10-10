function DNAStrand(dna){

  return dna.replace(/[GCTA]/g, c =>  pair[c] );
}
let pair = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'T',
  }