// 변수의 데이터 타입 명시
let stdId : number = 1111;
let stdName : string = '홍길동';
let stdAge : number = 20;
let stdGender : string = 'male';
let course : string = "TypeScript";
let completed : boolean = false;


// 함수의 데이터 타입 명시 ( 매개변수와 리턴값, 함수의 리턴 타입)
function Plus(a : number, b : number) : number {
    return a + b;
}

interface Student {
    stdId : number;
    stdName : string;
    stdAge? : number;
    stdGender : string;
    course : string;
    completed : boolean;
}

function getInfo(id : number) : Student {
    return {
        stdId : id,
        stdName : 'IM',
        stdGender : 'femaie',
        course : 'javascript',
        completed : true,
    };
}

console.log(getInfo(1000));