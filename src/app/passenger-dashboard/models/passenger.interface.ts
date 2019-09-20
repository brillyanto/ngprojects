export interface Child{
    name: string,
    gender: string,
    age: number
}
  
export interface Passenger{
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkedInDate: number,
    children: Child[] | null
}