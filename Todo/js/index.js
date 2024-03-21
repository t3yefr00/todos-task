const list =document.querySelection('ul')
const input =document.queryselection('input')


input.addEventlistener('keypress',(event) =>{
    if (event.key=== 'Enter') {
        event.preventdefault()
        const task = input.value.trim()
        if (task!== ''){
            const li = document.createElement()
            li.setAttribute('class','list-group-item')
            li.innrtHTLM =task
            list.append(li)
            input.value=''
            }
        }
    })