function introduction(name) {
    let namestring =  ('Hi, my name is ' + `${name}` + '.');
    return namestring;
}

function introductionWithLanguage(name, language) {
    let languageString = ('Hi, my name is ' + `${name}` + ' and I am learning to program in ' + `${language}` + '.');
    return languageString;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    let languageOptional = ('Hi, my name is ' + `${name}` + ' and I am learning to program in ' + `${language}` + '.');
    return languageOptional;
}