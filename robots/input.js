const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content = {
    maximumSentences: 7
  }
  const googleSearchCredentials = require('../credentials/google-search.json')

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.lang = askAndReturnLanguage()
  content.searchEngineId = askAndReturnSearchEngineId(content.lang)

  state.save(content)

  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  function askAndReturnLanguage(){
    const language = ['pt','en']
    const selectedLangIndex = readline.keyInSelect(language,'Choice Language: ')
    const selectedLangText = language[selectedLangIndex]

    return selectedLangText
}

  function askAndReturnSearchEngineId(lang){
    if (lang == "pt") {

      return googleSearchCredentials.searchEngineIdBR
    }
    else{
      return googleSearchCredentials.searchEngineId
    }
  }

}

module.exports = robot
