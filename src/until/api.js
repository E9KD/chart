import {
    ajax
} from './ajax'




export async function login(x) {
    let Login = new ajax
    let data = await Login.post('', x)
    return data;
}
export async function talkHistory() {
    let talkhistory = new ajax
    let data = await talkhistory.get('./json.txt')
    return data;
}
export async function lastChart() {
    let lastchartlist = new ajax
    let data = await lastchartlist.get('./json.txt')
    return data;
}
// export async function TalkingList() {
//     let talkinglist = new ajax
//     let data = await talkinglist.get('https://ces.biergao.vip/index.php')
//     return data;
// } 
