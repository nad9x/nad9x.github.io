window.onload = function(){
let body = document. getElementById("body");
 body.style.backgroundColor = '#28223f';
 body.style.fontFamily = ' Montserrat, sans-serif';
 body.style.display = 'flex';
 body.style.alignItems = 'center';
 body.style.justifyContent = 'center';
 body.style.minHeight = '100vh';
 body.style.margin = '0';
 let div1 = document.createElement("div");
 div1.style.backgroundColor = "#231e39";
 div1.style.borderRadius = "5px";
 div1.style.boxShadow = " 0px 10px 20px -10px rgba(0, 0, 0, 0.75)";
 div1.style.color = "#b3b8cd";
 div1.style.paddingTop = "30px";
 div1.style.position = "relative";
 div1.style.width = '350px';
 div1.style.maxWidth = '100%';
 div1.style.textAlign = 'center';

    let p1 = document.createElement("img"); 
    p1.src="http://blogithay.000webhostapp.com/9bb5069d-1bdc-4836-a70f-bb12af047c82.jpg";
    p1.style.width = "150px";
    p1.style.border = " 1.2px solid #03bfcb";
    p1.style.borderRadius = "50%";
    p1.style.padding = "6px";
    let out = document.getElementById('hell');
        let p2 = document.createElement("h3"); 
        p2.innerText = 'Nguyễn Anh Dũng';
        p2.style.margin = ' 10px 0';
        p2.style.textTransform = 'uppercase';
        let p3 = document.createElement('h6');
        p3.innerText = '11/03/199x - VietNam';
        p3.style.margin = ' 5px 0';
        let p4 = document.createElement('p');
        p4.innerHTML = 'Web Developer in love with <br> Software Engineering and Android';
        p4.style.fontSize = '14px';
        p4.style.lineHeight = '21px';
         
 
        let p5 = document.createElement('button');
      p5.innerText = 'Facebook'; p5.style.backgroundColor = ' transparent';
        p5.style.border = ' 1px solid #03bfcb';
        p5.style.borderRadius = '3px';
        p5.style.color = ' #03bfcb';
        p5.style.padding = "10px 25px";
        p5.style.fontWeight = '500';
        p5.onclick = function(){
             p4.innerHTML ='Name Facebook : Nguyễn Tú Anh' + '<br>' + 'Link : https://m.facebook.com/black048';
         }
         p5.onmouseover = function() 
{
    this.style.backgroundColor = "#03bfcb";
    this.style.color = ' #231e39';
  p6.style.backgroundColor = 'transparent';
    p6.style.color = ' #03bfcb';
}
p5.onmouseout = function(){
    this.style.backgroundColor = 'transparent';
    this.style.color = ' #03bfcb';
    
}
        let p6 = document.createElement('button');
       p6.innerText = 'About';
       p6.style.margin = "5px"; p6.style.backgroundColor = ' transparent';
        p6.style.color = ' #03bfcb';
        p6.style.border = ' 1px solid #03bfcb';
        p6.style.borderRadius = '3px';
        p6.style.padding = "10px 25px";
        p6.style.fontWeight = '500';
       p6.onclick = function(){
             p4.innerHTML = 'Web Developer in love with <br> Software Engineering and Android';
         }
         p6.onmouseover = function() 
{
    this.style.backgroundColor = "#03bfcb";
    this.style.color = ' #231e39';
  p5.style.backgroundColor = 'transparent';
    p5.style.color = ' #03bfcb';
}
p6.onmouseout = function(){
    this.style.backgroundColor = 'transparent';
    this.style.color = ' #03bfcb';
    
}
       let p7 = document.createElement('div');
       p7.style.backgroundColor = ' #1f1a36';
       p7.style.textAlign = 'left';
       p7.style.padding = '15px';
       p7.style.marginTop = '30px';
       let p7_1 = document.createElement('h6')
       p7_1.innerText = 'Skill';
        p7_1.style.margin = ' 5px 0';
        
        
    let p7_2 = document.createElement('ul');
    p7_2.style.listStyleType = "none";
    p7_2.style.margin = '0';
    p7_2.style.padding = '0';
    let skill = ["HTML5", "CSS3", "Javascript", "Jquery", "Ajax"];
    for (let i=0; i<skill.length; i++){ 
    let li = document.createElement('li'); 
    p7_2.appendChild(li); li.innerHTML = li.innerHTML + skill[i]; 
    li.style.border = '1px solid #2d2747';
    li.style.boderRadius = '2px';
    li.style.display = 'inline-block';
    li.style.fontSize = '12px';
    li.style.margin = '5px 7px 7px 0';
    li.style.padding = '7px';
    
    }
    
    p7.appendChild(p7_1);
    p7.appendChild(p7_2);
    body.appendChild(div1);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);
    div1.appendChild(p4);
    div1.appendChild(p5);
    div1.appendChild(p6);
    div1.appendChild(p7);
   
   }