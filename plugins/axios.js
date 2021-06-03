

export default function({req, $axios, redirect }) {

    $axios.onRequest(config => {
        // console.log('Making request to ' + config.url)
        console.log('Axios Loading')
        console.time('use')
 
    })

    $axios.onResponse(response => {
        // console.log(response)
        console.timeEnd('use')
        console.log('Axios Loading End')

    })
  
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        console.log(error,code)
        // if (code === 400 || code === 500) {
        //     redirect('/')
        // }
    })
}
