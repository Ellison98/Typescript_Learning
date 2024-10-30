// 일반적인 직원 정보
var empName;
var age;
var empJob;
function printEmp(empName, age, empJob) {
    //  console.log(`이름 : ${empName}, 나이 : ${age}, 직업 : ${empJob}`);
    console.log(empName + '의 나이는' + age + '이며 직업은' + empJob + '입니다.');
}
printEmp('홍길동', 30, '개발자');
