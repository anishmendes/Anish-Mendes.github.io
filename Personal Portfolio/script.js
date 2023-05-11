console.log("Script running...")
//it is done kina ki page load garda tyo cross nadekhos vanera 
document.querySelector('.cross').style.display ='none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle(('sidebarGo'))
    //yedi mero pahila class ma side bar xani vani sidebargo hataidini haldini



    //yo tala kosyntax ko kam chai ham lai click garda cross nonne cross lai garda ham none 
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display ='inline'
    document.querySelector('.cross').style.display = 'none'
}
 else{
     document.querySelector('.ham').style.display = 'none'
     //time out lay chai hamro cross line lai 400 milisec paxi dekhauxa 
     setTimeout(() => {
        
         document.querySelector('.cross').style.display ='inline'
     }, 350);
 }
})
