function analyzeTag(word) {
  this.word = word;

  this.tag = RiTa.getPosTags(this.word);
  

  if (this.tag == 'nn') {
    return true;
  } else if (this.tag == 'nns') {
    return true;
  } else if (this.tag == 'nnp') {
    return true;
  } else if (this.tag == 'nnps') {
    return true;
  } else if (this.tag == 'rb') {
    return true;
  } else if (this.tag == 'rbr') {
    return true;
  } else if (this.tag == 'rbs') {
    return true;
  } else if (this.tag == 'vb') {
    return true;
  } else if (this.tag == 'vbd') {
    return true;
  } else if (this.tag == 'vbg') {
    return true;
  } else if (this.tag == 'vbn') {
    return true;
  } else if (this.tag == 'vbp') {
    return true;
  } else if (this.tag == 'vbz') {
    return true;
  } else if (this.tag == 'jj') {
    return true;
  } else if (this.tag == 'jjr') {
    return true;
  } else if (this.tag == 'jjs') {
    return true;
  } else if (this.tag == 'cd') {
    return true;
  } else if (this.tag == 'fw') {
    return true;
  } else if (this.tag == 'uh') {
    return true;
  } else {
    return false;
  }


  //|| (RiTa.isAdverb(this.word)) || (RiTa.isAdverb(this.word)) || (RiTa.isAdjective(this.word))) {//|| (RiTa.getPosTags(word) == 'uh') || (RiTa.getPosTags(word) == 'cd') || (RiTa.getPosTags(word) == 'fw')) {

  // else if((RiTa.getPosTags(word).indexOf('uh')) || (RiTa.getPosTags(word).indexOf('cd')) || (RiTa.getPosTags(word).indexOf('fw'))){
  //   console.log('other');
  //   return true;
  // }

}
