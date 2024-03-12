console.log(document.URL)
console.log(document.body)
console.log(document.domain)
console.log(document.head)
console.dir(document.all)
document.title='page'
const body=document.body
// add text
body.append('hello','bye everyone')
// new element
const div=document.createElement('div')
console.log(div)
//adding text to div
div.innerText="javaScript"  // only visible content
div.textContent='css'   // full content
body.append(div)

//strong element
const strong=document.createElement('strong');
strong.innerText="This is a bold text";
div.innerHTML= '<strong> This is a bold text </strong>'
div.append(strong)

//remove element


//body.remove('div')
// attributes properties and methods
console.log(div.getAttribute(''))
div.id='name'
div.setAttribute('id','abcde')

// add class
div.classList.add('new-class')
//div.classList.remove('new-class')
div.className="hi a b c d"

div.style.setProperty('background-color','red')
div.style.color='green'
div.style.fontFamily='mono'