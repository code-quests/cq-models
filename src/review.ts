import { Quest, User } from "./quests";

export interface Submission {
    user: User  // user id of the submitter
    quest: Quest // quest id of the submission
    total_score: number // total score of the submission, this is a sum of all the reviews submitted for the submission 
    submitted_on: Date // date of submission
    status: "pending" | "approved" | "rejected"; // status of submission: pending to be reviewd, approved and scored, rejected failed the review
    note: string // note from the contestant to the reviewers
    file_url: string // url to the submission file on S3
}


export interface Review {
    reviewer: User
    submission: Submission
    quest: Quest
    status: "pending" | "approved" | "rejected"; // status of review: approved or rejected by the client
    ReviewResults: { key: string; value: string } // scorecard id of the review this is a JSON object stored in the DB, not an independent table.
    score: number // score of the review
    note: string // note from the reviewer to the client (not visible to contesntant)
}
