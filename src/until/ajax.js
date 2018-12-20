import axios from 'axios'

// axios.defaults.baseURL = ''


const changeParam = (param) => {
    if (param) {
        return JSON.stringify(param).replace(/:/g, '=').replace(/,/g, '&').replace(/{/g, '?').replace(/}/g, '').replace(/"/g, '');
    } else {
        return '';
    }
};

export class ajax {
    get(url, data = '') {
        return new Promise((resolve, reject) => {
            axios.get(`${url}${changeParam(data)}`)
                .then(resolve)
                .catch(reject)
        })

    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(resolve)
                .catch(reject)
        })

    }
}









// import Vue from 'vue'
// import VueResource from 'vue-resource'




// Vue.use(VueResource)


// //返回的值 成功就是resolve(response.data)，失败就是 reject(error)
// export default function ajax(url) {
//     return new Promise(function (resolve, reject) {
//         Vue.http.jsonp(
//             url
//             ).then(function (response) {
//             resolve(response.data)
//         }, function (error) {
//             reject(error)
//         })
//     })
// }