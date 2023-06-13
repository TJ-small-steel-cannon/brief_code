// import { useState } from 'react';
// import './Secondary_menu.css'
// function SecondaryMenu() {

//     const [SecData] = useState({
//         secdata: [
//             {
//                 "id": 1,
//                 "value1": "大家电",
//                 "value2": "平板电视",
//                 "value3": "空调",
//                 "value4": "洗衣机",
//                 "value5": "DVD/电视盒子",
//                 "value6": "平板电视",
//                 "value7": "空调",
//                 "value8": "洗衣机",
//                 "value9": "DVD/电视盒子",
//                 "value10": "平板电视",
//                 "value11": "空调",
//                 "value12": "洗衣机",
//                 "value13": "DVD/电视盒子"
//             },
//             {
//                 "id": 2,
//                 "value1": "大家电",
//                 "value2": "平板电视",
//                 "value3": "空调",
//                 "value4": "洗衣机",
//                 "value5": "DVD/电视盒子",
//                 "value6": "平板电视",
//                 "value7": "空调",
//                 "value8": "洗衣机",
//                 "value9": "DVD/电视盒子",
//                 "value10": "平板电视",
//                 "value11": "空调",
//                 "value12": "洗衣机",
//                 "value13": "DVD/电视盒子"
//             },
//             {
//                 "id": 3,
//                 "value1": "大家电",
//                 "value2": "平板电视",
//                 "value3": "空调",
//                 "value4": "洗衣机",
//                 "value5": "DVD/电视盒子",
//                 "value6": "平板电视",
//                 "value7": "空调",
//                 "value8": "洗衣机",
//                 "value9": "DVD/电视盒子",
//                 "value10": "平板电视",
//                 "value11": "空调",
//                 "value12": "洗衣机",
//                 "value13": "DVD/电视盒子"
//             },
//             {
//                 "id": 4,
//                 "value1": "大家电",
//                 "value2": "平板电视",
//                 "value3": "空调",
//                 "value4": "洗衣机",
//                 "value5": "DVD/电视盒子",
//                 "value6": "平板电视",
//                 "value7": "空调",
//                 "value8": "洗衣机",
//                 "value9": "DVD/电视盒子",
//                 "value10": "平板电视",
//                 "value11": "空调",
//                 "value12": "洗衣机",
//                 "value13": "DVD/电视盒子"
//             },
//             {
//                 "id": 5,
//                 "value1": "大家电",
//                 "value2": "平板电视",
//                 "value3": "空调",
//                 "value4": "洗衣机",
//                 "value5": "DVD/电视盒子",
//                 "value6": "平板电视",
//                 "value7": "空调",
//                 "value8": "洗衣机",
//                 "value9": "DVD/电视盒子",
//                 "value10": "平板电视",
//                 "value11": "空调",
//                 "value12": "洗衣机",
//                 "value13": "DVD/电视盒子"
//             },
//         ]
//     })
//     return (
//         <div className='Secondary_menu' id='s1'>
//             <div className='Secondary_menu_div'>
//                 {SecData.secdata.slice(0,5).map((sec) => (
//                     <>
//                         <div key={sec.id}>{sec.value1}</div>
//                         <ul>
//                             <li>{sec.value2}</li>
//                             <li>{sec.value3}</li>
//                             <li>{sec.value4}</li>
//                             <li>{sec.value5}</li>
//                             <li>{sec.value6}</li>
//                             <li>{sec.value7}</li>
//                             <li>{sec.value8}</li>
//                             <li>{sec.value8}</li>
//                             <li>{sec.value10}</li>
//                             <li>{sec.value11}</li>
//                             <li>{sec.value12}</li>
//                             <li>{sec.value13}</li>
//                         </ul>
//                     </>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SecondaryMenu;