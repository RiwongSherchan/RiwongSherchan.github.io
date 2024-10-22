
function nextSet(setNumber) {
    const currentSet = document.querySelector('.question-set.active');
    currentSet.classList.remove('active');
    
    const nextSet = document.getElementById(`set-${setNumber}`);
    nextSet.classList.add('active');
}


document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const formData = new FormData(this);
    let totalScore = 0;
    let result = {};

   
    for (let [key, value] of formData.entries()) {
        result[key] = value;
        totalScore += parseInt(value); 
    }

    let feedback;
    if (totalScore <= 40) {
        feedback = "Your mental health seems to be in a great state. You seem balanced and emotionally resilient.";
    } else if (totalScore <= 60) {
        feedback = "You're doing okay, but there are areas in your mental health that could use some attention.";
    } else if (totalScore <= 80) {
        feedback = "You may be dealing with some stress and challenges. Consider seeking support from friends, family, or professionals.";
    } else {
        feedback = "Your results suggest you're experiencing high levels of stress or anxiety. It might be a good idea to consult with a therapist.";
    }

    
    alert("Your total score is: " + totalScore + ". " + feedback);
    
   
});
