//Coloured Triangles
//https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

function triangle(row) {
  const m = {
    BB: "B",
    BG: "R",
    BR: "G",
    GB: "R",
    GG: "G",
    GR: "B",
    RB: "G",
    RG: "B",
    RR: "R",
  };
  while (row.length > 1)
    row = [...row].reduce(
      (a, v, i) => (i ? a + m[row[i - 1] + row[i]] : a),
      ""
    );
  return row;
}

console.log(triangle("RBRGBRB"));

//RBRGBRB
// 0 => ''
// 1 => ''+m[RB] => G
// 2 => 'G' + m[BR] => GG
// 3 => 'GG' + m[RG] => GGB
// 4 => 'GGB' + m[GB] => GGBR
// 5 => 'GGBR' + m[BR] => GGBRG
// 6 => 'GGBRG' + m[RB] => GGBRGG
//GGBRGG
// 0 => ''
// 1 => '' + m[GG] => G
// 2 => 'G' + m[GB] => GR
// 3 => 'GR + m[BR] => GRG
// 4 => 'GRG' + m[RG] => GRGB
// 5 => 'GRGB' + m[GG] => GRGBG
//GRGBG
// 0 => ''
// 1 => '' + m[GR] => B
// 2 => 'B' + m[RG] => BB
// 3 => 'BB' + m[GB] => BBR
// 4 => 'BBR' + m[BG] => BBRR
//BBRR
// 0 => ''
// 1 => '' + m[BB] => B
// 2 => 'B' + m[BR] => BG
// 3 => 'BG' + m[R] => BGR
//BGR 
// 0 => ''
// 1 => '' + m[BG] => R
// 2 => 'R' + m[GR] => RB
//RB
// 0 => ''
// 1 => '' + m[RB] => G