
import {Scorecard} from "./scorecard"

export interface Org {
    name: string; // display name of the org
    description: string; 
    logo: string; // url to logo of the org
    phone: string; // phone number of org representative
    website: string; // website URL of the org
    is_verified: boolean; // true if org is approved by admins
    is_active: boolean; // false to block the org from publishing quests
    is_public: boolean; // false to hide org details
    manager: User; // user id of manager
}


export interface User {
    handle: string;  // unique username like twitter handle, used as nickname for user 
    country: string;  // country of residence ISO format
    city: string;  // city of residence
    avatar: string; // url to avatar image
    role: "admin" | "client" | "contenstant"; // user role: admin, manager, reviewer, participant
    badges: string[]; // list of badges earned by use, badge names are unique lowercase strings comma separated in the database 
    email: string; // email address 
    password: string; // password hash not the actual password
    last_login_on: Date; // last login date, automatically updated
    last_login_ip: string; // last login IP, automatically updated
    is_active: boolean; // false to block user from logging in
}




export interface Registration {
    user: User
    quest: Quest
    is_invited: boolean // true if user was invited to compete or review the quest
    is_approved: boolean // true if user was approved to compete or review the quest if the quest requires approval
    status: "pending" | "approved" | "rejected" | "blocked"; // status of registration: pending, approved, rejected, blocked
    role: "contestant" | "reviewer"; // role of user in the quest
    joined_on: Date // date of registration
}



export interface Category {
    name: string    // unique name of the category (e.g. Frontend, Backend, Mobile, UX, etc.)
    description: string     // description of the category
    icon: string    // url to icon image
    cover_img: string    // url to hero image for the category page
}

export interface Quest{
    title: string
      status: "draft" | "published" | "archived"; // status of quest: draft, published, archived, ended, deleted
      type: "contest" | "race"; // type of quest
      phase: "registration" | "submission" | "review" | "ended"; // phase of quest
      hero_img: string
      icon: string
  
      // Foriegn keys
      scorecard: Scorecard
      category: Category
      org: Org
      manager: User
  
      // Tasks
      description: string
      tasks: string[]
      requirements: string[]
      acceptanceCriteria: string[]
      technologies: string[]
  
      // Dates
      created_on: Date
      published_on: Date
      registration_deadline: Date
      submission_deadline: Date
      review_deadline: Date
      ended_on: Date
      updated_on: Date
      archived_on: Date
  
      // Restrictions
      location: string
      max_participants: string
      min_participants: string
      updates: string[]
      is_public: boolean
      requires_approval: boolean
      }
      

export interface Comment {
    user: User
    quest: Quest
    body: string
    status: "pending" | "approved" | "rejected"; // status of comment: pending, approved, rejected
    created_on: Date
}
