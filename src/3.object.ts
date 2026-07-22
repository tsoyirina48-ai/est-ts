
/*object type*/


const user: {
    name: string;
    age: number;
    address?:string; //optional property
} = {
    name:'tiger',
    age:30,
};


user.address = '경기도 남양주시';


const config:{
   readonly apiKey:string
} = {
    apiKey:'asdjzxcc23m98235hjl'
}

config.apiKey = 'hello'