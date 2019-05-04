
function calc(x){
    if(x=='C'){
        document.getElementById('input-main').innerHTML=''
        document.getElementById('input-stored').innerHTML=''
    }
    else if(x=='neg'){
        x=document.getElementById('input-main').innerHTML;
        if(x[0]=='-'){
            document.getElementById('input-main').innerHTML=document.getElementById('input-main').innerHTML.slice(1,document.getElementById('input-main').innerHTML.length)
        }
        else{
            document.getElementById('input-main').innerHTML='-'+document.getElementById('input-main').innerHTML;
        }
    }
    else if(x=='mod'){
        document.getElementById('input-stored').innerHTML=document.getElementById('input-main').innerHTML+'%';
        document.getElementById('input-main').innerHTML=''
    }
    else if(x=='add'){
        document.getElementById('input-stored').innerHTML=document.getElementById('input-main').innerHTML+'+';
        document.getElementById('input-main').innerHTML=''
    }
    else if(x=='sub'){
        document.getElementById('input-stored').innerHTML=document.getElementById('input-main').innerHTML+'-';
        document.getElementById('input-main').innerHTML=''
    }
    else if(x=='div'){
        document.getElementById('input-stored').innerHTML=document.getElementById('input-main').innerHTML+'/';
        document.getElementById('input-main').innerHTML=''
    }
    else if(x=='mul'){
        document.getElementById('input-stored').innerHTML=document.getElementById('input-main').innerHTML+'*';
        document.getElementById('input-main').innerHTML=''
    }
    else if(x=='0'||x=='1'||x=='2'||x=='3'||x=='4'||x=='5'||x=='6'||x=='7'||x=='8'||x=='9'){
        document.getElementById('input-main').innerHTML+=x;
    }
    else if(x=='back'){
        document.getElementById('input-main').innerHTML=document.getElementById('input-main').innerHTML.slice(0,document.getElementById('input-main').innerHTML.length -1);
    }
    else if(x=='res'){
        document.getElementById('input-stored').innerHTML+=document.getElementById('input-main').innerHTML
        document.getElementById('input-main').innerHTML=eval(document.getElementById('input-stored').innerHTML)
    }
}