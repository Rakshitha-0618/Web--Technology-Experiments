const quizData = [
    {
        question: "Who is making the Web standards?",
        options: ["Mozilla", "W3C", "Google", "Microsoft"],
        answer: "W3C"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyper Tool Multi Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["&lt;heading&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;head&gt;"],
        answer: "&lt;h1&gt;"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["&lt;break&gt;", "&lt;lb&gt;", "&lt;br&gt;", "&lt;line&gt;"],
        answer: "&lt;br&gt;"
    },
    {
        question: "Which attribute is used to provide a unique name to an element?",
        options: ["class", "id", "name", "style"],
        answer: "id"
    },
    {
        question: "Which HTML tag is used to display images?",
        options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;", "&lt;src&gt;"],
        answer: "&lt;img&gt;"
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        answer: "&lt;a&gt;"
    },
    {
        question: "Which tag is used to define an unordered list?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        answer: "&lt;ul&gt;"
    },
    {
        question: "Which HTML element is used for the title of a document?",
        options: ["&lt;meta&gt;", "&lt;title&gt;", "&lt;head&gt;", "&lt;header&gt;"],
        answer: "&lt;title&gt;"
    },
    {
        question: "Which input type is used for passwords?",
        options: ["text", "password", "secure", "hidden"],
        answer: "password"
    }
];

// Load all questions
function loadQuiz() {
    let container = document.getElementById("quiz");

    let html = "";

    quizData.forEach((q, index) => {
        let labels = ["A", "B", "C", "D"];

        html += `
            <div class="card">
                <h3>Q${index + 1}. ${q.question}</h3>
        `;

        q.options.forEach((opt, i) => {
            html += `
                <label class="option">
                    <input type="radio" name="q${index}" value="${opt}">
                    <b>${labels[i]})</b> ${opt}
                </label>
            `;
        });

        html += `</div>`;
    });

    container.innerHTML = html;
}

// Submit quiz
function submitQuiz() {
    let score = 0;

    quizData.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerHTML =
        `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
}

// Load on start
loadQuiz();     