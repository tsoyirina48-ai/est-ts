


/* union type a | b | c  */


let str:'name' | 'age' | 'address' = 'name';


type CompanyA = {
    companyName: string;
    since: number;
}


const companyA:CompanyA | {ceo:string} = {
  companyName:'8b-studio',
  since:2022
}