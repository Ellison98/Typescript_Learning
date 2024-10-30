// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = '홍길동';
var stdAge = 20;
var stdGender = 'male';
var course = "TypeScript";
var completed = false;
// 함수의 데이터 타입 명시 ( 매개변수와 리턴값, 함수의 리턴 타입)
function Plus(a, b) {
    return a + b;
}
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'IM',
        stdGender: "female",
        course: 'javascript',
        completed: true,
    };
}
console.log(getInfo(1000));
