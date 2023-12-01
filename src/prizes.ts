import { Org, Quest, User } from "./quests";

export interface BillingInfo {
    user: User;   // user id of the billing contact
    full_name: string; // legal full name of the billing contact
    address: string; // street address of the billing contact
    city: string;
    state: string; 
    country: string; 
    zip: string; 
    email: string; 
    phone: string; 
    email_verified_on: Date; 
    phone_verified_on: Date; 
}



export interface Prize {
    org: Org    // org id of the prize sponsor
    quest: Quest // quest id for which the prize is awarded
    payee: User // user id of the prize payee (contestant or reviewer who will recieve the payment)
    billing_info: BillingInfo // billing info of the payee
    rank: string
    value: string
    currency: string
    type: "cash" | "gift" | "voucher" | "points" | "badge"; // type of prize 
    status: "unawarded" | "awarded" | "paid"; // status of prize: unawarded if the prize was never awarded to anyone, awarded if  if the payee claimed the prize, paid if the prize is paid to the payee
    awarded_on: Date
    paid_on: Date
}
