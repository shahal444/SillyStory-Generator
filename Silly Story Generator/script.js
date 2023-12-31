document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const storyContainer = document.getElementById("story");

    generateButton.addEventListener("click", generateStory);

    function generateStory() {
        const firstPersonName = document.getElementById("firstPersonName").value;
        const firstPersonGender = document.getElementById("firstPersonGender").value;
        const secondPersonName = document.getElementById("secondPersonName").value;
        const secondPersonGender = document.getElementById("secondPersonGender").value;
        const country = document.getElementById("country").value;
        const year = document.getElementById("year").value;

        const story = `Once upon a time in the bustling city of ${country}, there lived a young man named ${firstPersonName}. ${firstPersonName} was an ordinary guy with an extraordinary sense of humor. ${firstPersonGender} was known for making people laugh with his silly jokes and funny faces. ${firstPersonName} had a big heart, and ${firstPersonGender} always had a smile on ${secondPersonGender} face.

        One sunny morning in 1995, ${firstPersonName} decided to take a walk in Central Park. As ${firstPersonGender} strolled through the park, ${firstPersonGender} noticed a beautiful woman sitting on a bench. Her name was ${secondPersonName}, and she had the most enchanting smile ${firstPersonName} had ever seen. ${secondPersonName} was a charming and elegant lady with a passion for adventure.
        
        ${firstPersonName}, being the friendly and outgoing person that ${firstPersonGender} was, couldn't resist striking up a conversation with ${secondPersonName}. ${firstPersonGender} told her one of ${secondPersonGender} silliest jokes, and to ${secondPersonGender} surprise, ${secondPersonName} burst into laughter. They instantly clicked, and from that day on, they became inseparable.
        
        ${firstPersonName} and ${secondPersonName} spent their days exploring the wonders of ${country} City, from the towering skyscrapers to the delicious hot dog stands. They would often burst into fits of laughter at the most unexpected moments, making their adventures all the more fun.
        
        One day, as they gazed at the city skyline from the top of the Empire State Building, ${firstPersonName} turned to ${secondPersonName} and said, "You know, ${secondPersonName}, you've made ${country} feel like the silliest and most wonderful place in the world."
        
        ${secondPersonName} smiled and replied, "And you, ${firstPersonName}, have turned my life into the silliest and most extraordinary adventure."
        
        From that day on, ${firstPersonName} and ${secondPersonName} continued to bring joy and laughter to the people of ${country}. Their love story was as silly as it was beautiful, proving that sometimes, the most unexpected encounters can lead to the most wonderful adventures.
        
        And so, in the city that never sleeps, ${firstPersonName} and ${secondPersonName} lived happily ever after, sharing their laughter and love with everyone they met.`;
        
        // display the story
        storyContainer.innerText = story;
    }
});
