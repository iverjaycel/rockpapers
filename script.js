//This line selects all elements in the HTML document that have a `data-selection` attribute and stores them in the `selectionButtons` variable.
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn  = document.querySelector('[data-final-column]')
const compterScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
//This is an array of objects representing the game's selections (rock, paper, and scissors). Each object has a name (e.g., 'rock'), an emoji for display, and the choice it can beat (e.g., 'rock' beats 'scissors').
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
//This loop iterates over the elements stored in `selectionButtons`, and for each element, it adds a click event listener that calls the `makeSelection` function when the element is clicked. It extracts the selected item's name from the dataset and looks up its details from the `SELECTIONS` array.
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click' , e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection) 
    })
})
//This function is called when a user selects a choice. It generates a random choice for the computer, checks the winner, and updates the scores and result display.
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
//This function increments the score displayed in the provided `scoreSpan` element by 1. It converts the current score to an integer, increments it, and updates the displayed score.
function incrementScore(scoreSpan){
   scoreSpan.innerText = parseInt(scoreSpan.innerText)+1

}
//This function adds a result element to the game board based on the provided `selection` and whether it is a winner. It creates a new `div` element, sets its text content to the selected emoji, and adds classes to indicate it as a result and, if it's a winner, adds a 'winner' class. Then, it appends this element to the `finalColumn`.
function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}
//This function determines if `selection` beats `opponentSelection` based on their `beats` properties. It returns `true` if `selection` wins, otherwise `false`.
function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name
}
// This function randomly selects an item from the `SELECTIONS` array by generating a random index and returning the corresponding object.
function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
//16.08 
