const selectionButtons = document.querySelectorAll('[data-selection]')
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
}
function addSelectionResult(selection, win)
function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name
}
function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

//16.08 