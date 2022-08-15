let promptArray = []
let numArray = 0
let table = document.querySelector('.table')
const showPrompt =() =>{
    console.log('hello')
    const prompt = document.getElementById('prompt');
    document.querySelector('.prompt-content').classList.remove('animate')
    let div = document.querySelector('.prompt-div')
    prompt.style.display = 'flex'
    div.style.display = 'flex';
    document.querySelector('.prompt-content').classList.add('animate')
}
const closePrompt = ()=>{
    document.getElementById('prompt').style.display ='none'
    document.querySelector('.prompt-content').classList.remove('animate')
    let div = document.querySelector('.prompt-div')
        div.style.display = "none"
}
const handlePrompt = (arg, index) =>{
    closePrompt()
    let allInp = document.querySelectorAll('.prompt-div > input');
    if(arg == 1){
            allInp.forEach((input,index) =>{
                let details = input.value
                if(details == null || details ==""){
                    alert("please your details are not complete")
                return;
            }
            // alert(`${details} add successfully`);
            numArray ++;
            promptArray = [...promptArray,{id:numArray,details}];
            tableContent(promptArray);
            })
            
    }
    
}
let  tableContent = (data) =>{
    // table.innerHTML = ""
     let content = ''
    if(data.length > 0){
        data.forEach(({details},i) =>{
            // let tr = document.createElement('tr')
            // let td1 = document.createElement('td');
            // let td2 = document.createElement('td');
            // let td3 = document.createElement('td');
            // let td4 = document.createElement('td');
            // let inp1 = document.createElement('input')
            // let inp2 = document.createElement('input')
            // let inp3 = document.createElement('input')
            // inp1.value = 'john'
            // inp2.value = '16'
            // inp3.value = 'male'
            // inp1.setAttribute('disabled','1')
            // inp2.setAttribute('disabled','1')
            // inp3.setAttribute('disabled','1')
            // td1.appendChild(inp1)
            // td2.appendChild(inp2)
            // td3.appendChild(inp3)
            // td4.setAttribute('class','action')
            // let span1 = document.createElement('span')
            // let span2 = document.createElement('span')
            // let span3 = document.createElement('span')
            // let span4 = document.createElement('span')
            // let span5 = document.createElement('span')
            // span1.setAttribute('class','bi-check')
            // span2.setAttribute('class','bi-arrow-up-short')
            // span3.setAttribute('class','bi-arrow-down-short')
            // span4.setAttribute('class','bi-pencil-square')
            // span5.setAttribute('class','bi-x')
            // td4.appendChild(span1)
            // td4.appendChild(span2)
            // td4.appendChild(span3)
            // td4.appendChild(span4)
            // td4.appendChild(span5)
            // tr.appendChild(td1)
            // tr.appendChild(td2)
            // tr.appendChild(td3)
            // tr.appendChild(td4)
            // table.appendChild(tr)
            content +=`
                <tr>
                    <td><input type="text" value="${details}" disabled></td>
                    <td><input type="text" value="${details}" disabled></td>
                    <td><input type="text" value="${details}" disabled></td>
                    <td class="action">
                        <span class="bi-check"></span>
                        <span class="bi-arrow-up-short"></span>
                        <span class="bi-arrow-down-short"></span>
                        <span class="bi-pencil-square"></span>
                        <span class="bi-x"></span>
                    </td>
                </tr>
            `
        })
        table.innerHTML = content
    }
}