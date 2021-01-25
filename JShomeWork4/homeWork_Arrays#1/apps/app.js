let names = ['Slavko', 'Anja', 'Martin']

let activities = ['workout', 'teache code', 'reading', 'singing']

let moods = ['happy', 'sad', 'angry']



function tellStory1(){
alert(`hi there my name is ${names[2]}, I love to ${activities[1]} and that makes me quite ${moods[0]}`)
}

tellStory1()


let myStory = ['Slavko', 'workout', 'happy']

function tellStory2(array){
    alert(array)
}

tellStory2(`Hi there! my name is ${myStory[0]}. I want to ${myStory[1]}, and that makes me very ${myStory[2]}!`)
