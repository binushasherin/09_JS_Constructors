
var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

var question2 = new QuizQuestion(
    "What is the first planet in the solarsystem?",
    "Mercury"
)

var question3 = new QuizQuestion(
    "What is the national bird?",
    "Peacock"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Londan");


question2.addOption("Mars");
question2.addOption("Earth");
question2.addOption("Mercury");
question2.addOption("Jupiter");

question3.addOption("Parrot");
question3.addOption("Peacock");
question3.addOption("Duck");
question3.addOption("Pigeon");


question1.showQuestion();

question2.showQuestion();

question3.showQuestion();