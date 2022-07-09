fetch('json.json')
.then(response=>response.json())
.then(data=> {
    console.log(data)
    document.querySelector('#coins').innerText = data.balance
    document.querySelector('#coins__collapse').innerText = data.balance
    
   
    document.querySelector('#item1').innerText=data.id1
    document.querySelector('#item2').innerText=data.id2
    document.querySelector('#item3').innerText=data.id3
    document.querySelector('#item4').innerText=data.id4
    
    
    let banCheck = data.banned ? document.querySelector('#nick').innerHTML = data.nick (
        document.querySelector('#nick').innerHTML = data.nick,
        document.querySelector('#nick__collapse').innerHTML = data.nick,
        document.querySelector('#nick').style.color='red',
        document.querySelector('#nick').style.fontWeight='700',
        document.querySelector('#nick').style.border='2px solid red',
        document.querySelector('#nick').style.padding='0 0px',
        document.querySelector('#nick__collapse').style.color='red',
        document.querySelector('#nick__collapse').style.fontWeight='700',
        document.querySelector('#nick__collapse').style.border='none',
        document.querySelector('#nick__collapse').style.padding='0 0px',
        document.querySelector('#coins').style.visibility='hidden',
        document.querySelector('.balance img').style.visibility='hidden',
        document.querySelector('.userBox__info h3').style.visibility='hidden',
        document.querySelector('.userBox__info').style.height='50px'
        //document.querySelector('.userBox__avatar').style.visibility='hidden'
        )
        : document.querySelector('#nick').innerHTML = data.nick2
         document.querySelector('.nick__collapse').innerHTML = data.nick2
         document.querySelector('#nick').style.fontWeight='400'
         document.querySelector('.pvp').innerHTML = "PVP: "+data.pvp
         document.querySelector('.flight').innerHTML = "Flight: "+data.flight
         document.querySelector('.mothership').innerHTML = "Mothership: "+data.mothership
         document.querySelector('.rockets').innerHTML = "Rocket: "+data.rockets
         document.querySelector('.defence').innerHTML = "Defence: "+data.defence
         document.querySelector('.tourel').innerHTML = "Tourel: "+data.tourel
         document.querySelector('.flagman').innerHTML = "Flagman: "+data.flagman


})


let show = document.querySelector('.userBox__avatar');
let charInfo = document.querySelector('.userBox__info');

    show.onclick = function(){
       charInfo.classList.toggle('hidden')
    }

let clickCoin = document.querySelector('#coins');
let addCoin = document.querySelector('.addCoin');

    clickCoin.onclick = function(){
      addCoin.classList.toggle('hidden')
    }


