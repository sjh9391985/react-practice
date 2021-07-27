/*
    named export
    exports(CommonJS)와 유사하다, 이 모듈을 import할 때는 destructure(객체분해)가 가능하다.
    exports.a = 1
    exprots.f = function(){}
*/

export const add = function(a, b){
    return a+b;
}

export const substract = function(a, b){
    return a-b;
}

//export { add }