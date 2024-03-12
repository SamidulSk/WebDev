//Regular Expression
let pattern='pw'
let regExOne=new RegExp(pattern)

let flag='gi'
let regExTwo=new RegExp(pattern,flag)

let regExThree= /pw/gi

const strToCheck="PW is growing at a rapid speed and recently they are working on Pwsills to create skills based pwcontent"

const result=regExThree.test(strToCheck)
console.log(result)

const anotheresult=strToCheck.match(regExThree)
console.log(anotheresult)

const onemoreresult=strToCheck.replace(regExThree,'p-w ')
console.log(onemoreresult)

const webUrl = "https://pwskills.com/hitesh%21choudhary";
const useableurl = webUrl.replace(/%\d\d/g, '-');
console.log(useableurl);
