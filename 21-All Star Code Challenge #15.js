//-------All Star Code Challenge #15--------//

//rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

//?Solution JS

function rotate(s){
    return s.split("").map(e=>s = s.slice(1)+s.slice(0,1));
  }


//?Solution Python

// def rotate(str_):
//     return [str_[i + 1:] + str_[:i + 1] for i in range(len(str_))]

//?Solution Python-2
// def rotate(s):
//     return [s[i+1:] + s[:i+1] for i in range(len(s))]