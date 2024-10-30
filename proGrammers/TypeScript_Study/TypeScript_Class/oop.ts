// 일반적인 직원 정보
let empName : string;
let age : number;
let empJob : string;

function printEmp(empName : string, age : number, empJob : string) : void {
    //  console.log(`이름 : ${empName}, 나이 : ${age}, 직업 : ${empJob}`);
    console.log(empName+ '의 나이는' + age + '이며 직업은' + empJob + '입니다.');
}

printEmp('홍길동', 30, '개발자');