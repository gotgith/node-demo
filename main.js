window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function({url,method,body,success, fail}) {
   let  request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                success.call(undefined, request.responseText)
            }else{
                fail.call(undefined, request)
            }
        }
    }
    request.send(body)
}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xx',
        method: 'get',
        body: 'a=123&b=222',
        success: (responseText)=>{ console.log(responseText) },
        failFn: (request)=>{console.log(request)}
    })
})


