const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn  = document.querySelector('[data-final-column]')
const compterScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
 {
    name: 'rock',
    emoji: '✊',
    beats: 'sizor'
 },
 {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
 },
 {
    name: 'sizor',
    emoji: '✌️',
    beats: 'paper'
 }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click' , e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection) 
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection,computerSelection)
    const ComputerWinner = isWinner(computerSelection,selection)
    // console.log(selection)
    console.log(computerSelection)
    addSelectionResult(computerSelection,ComputerWinner)
    addSelectionResult(selection,yourWinner)

    if(yourWinner) incrementScore(yourScoreSpan)
    if(ComputerWinner) incrementScore(compterScoreSpan)
}
function incrementScore(scoreSpan){
   scoreSpan.innerText = parseInt(scoreSpan.innerText)+1

}
function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}
function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name
}
function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

//16.08 