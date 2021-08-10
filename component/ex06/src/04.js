import fs from 'fs';
import update from 'react-addons-update';
        
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    // 해당 패스 값 변경
    receive: { $set: '부산시 해운대구 우동'},

    // 내부 값 변경
    payment: {
        method: { $set: 'MOBILE'}
    },

    // 배열 수정
    products:{
        // 새로운 배열 요소 추가
        $push: [{ 
            no: "s002-002",
            name: "블루 양말",
            price: 2000,
            amount: 1
        }] ,
        // 배열 index 찾아서 변경
        0: {
            amount: {$set: 5}
        }
    }
});

console.log(state.order, updateOrder, state.order == updateOrder);

