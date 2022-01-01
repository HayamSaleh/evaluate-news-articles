const URL_REGEX_EXP =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

export function validateUrl(value){
  const regexp = new RegExp(URL_REGEX_EXP);

  return regexp.test(value);
} 