
interface Scorecard {
    name: string    // unique name of the scorecard
    description: string // description of the scorecard
    max_score: number   // maximum score of the scorecard (100%)
    min_score: number   // minimum score to pass the scorecard 
    questions: Question[] // list of questions in the scorecard
}

interface Question {
    key: string     // unique key of question (e.g. unit_tests_coverage, )
    title: string    // question text
    choices: Choice[] // list of choices for the question
    wieght: number  // wieght of the question in the scorecard
    min_score: number   // minimum score for this question to pass the whole scorecard, this used to create disqualifying questions (e.g. if the score is less than 5 for this question, the whole scorecard is failed)
    required: boolean
}

interface Choice {
    key: string // unique key for the choice (e.g. full)
    value: number   // score of the choice
    title: string   // title of the choice
    text: string    // description of the choice, shown as tooltip
}

// This is the object to be submitted to the Review API after the review is completed by the reviewer
interface ReviewResults {
    scorecard_id : number // id of the scorecard
    scorecard_name : string // name of the scorecard
    reviewer: number    // id of the reviewer
    submission: number  // id of the submission
    quest: number       // id of the quest
    score: number // score of the review
    note: string // note from the reviewer to the client (not visible to contesntant)
    answers : { key: string; score: string }
}

// Permalink schema: https://.../scorecard#name=string&score=number&question_key=question_choice_key&.....
// Permalink example: https://.../scorecard#name=backend&score=100&q1=3&q2=2&q3=4  

const scorecard_example = {
    "name": "frontend",
    "description": "Frontend scorecard v1",
    "max_score": 100,
    "min_score": 80,
    questions: [
        {
            key: "unit_tests_coverage",
            title: "Unit tests coverage",
            wieght: 50,
            min_score: 0,
            required: true,
            choices: [
                {
                    key: "full",
                    value: 2,
                    title: "Full coverage",
                    text: "All code is covered with unit tests"
                }, {
                    key: "partial",
                    value: 1,
                    title: "Partial coverage",
                    text: "Some code is covered with unit tests"
                }, {
                    key: "none",
                    value: 0,
                    title: "No coverage",
                    text: "No unit tests"
                }
            ]
        }, {
            key: "code_quality",
            title: "Code quality",
            wieght: 50,
            min_score: 0,
            required: true,
            choices: [
                {
                    key: "high",
                    value: 2,
                    title: "High",
                    text: "Code is clean, readable, and well documented"
                }, {
                    key: "medium",
                    value: 1,
                    title: "Medium",
                    text: "Code is readable and well documented"
                }, {
                    key: "low",
                    value: 0,
                    title: "Low",
                    text: "Code is not readable and not documented"
                }
            ]
        }
    ]

} as Scorecard

