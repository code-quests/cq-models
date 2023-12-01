import { User } from "./quests"

interface Notifications {
    user: User
    body: string
    url: string
    status: "read" | "unread"
    created_on: Date
}
