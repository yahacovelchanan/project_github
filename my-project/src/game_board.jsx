import { useState, useEffect } from 'react'
let myNumber
let lenList

    const numberRandom10 = () => {
        const number10 = Math.floor((Math.random() * 10)+1);
        return number10
    }
    const numberRandom100 = () => {
    const number100 = Math.floor(Math.random() * 100);
    return number100
    }
    const numbers_for_boooms= () =>{
        const list_booms=[]
         lenList=numberRandom10()
        for(let i=0;i<=lenList;i++){
            myNumber=numberRandom100()
            list_booms.push({id:myNumber})
        }
        return list_booms
    }

        const table =() =>{
        const tempboard =[]
        for (let i = 0; i < 100; i++) {
        tempboard.push({ id: i })
        
    }
    return tempboard
}

export default function GameBoard() {

    const [count, setCount] = useState(0);
    const [win, setWin] = useState("");
    const [list,setList]=useState([]);
    const [board,setBoard]=useState(()=>table());
    useEffect(()=>{
        setList(()=>numbers_for_boooms())
    },[])

    console.log("list",list);
    const handleClick = (e, num) => {
        for(let i=0;i<list.length;i++){
            if(num.id==list[i].id){
                e.target.innerText="💣"
                e.target.className = 'bg-red-600 flex flex items-center justify-center'
                list.splice(i,1)
                if(list.length==0)
                {setWin("win the game")}
            }else{
                if (e.target.className !== 'bg-green-600 border flex items-center justify-center'&&
                    e.target.className !== 'bg-red-600 flex flex items-center justify-center'){
                    e.target.innerText="x"
                    e.target.className = 'bg-green-600 border flex items-center justify-center'
                    console.log("num",num);
                    setCount(count + 1);
                }
            }
        }
    };
    return (
        <div>
            <main className='grid grid-rows-10
//      grid-cols-10 bg-amber-300 border-amber-600
//       h-150 w-150 mt-30 border-4 grid-flow-col'>
                {board.map((num) => (
                    <div key={num.id}
                        onClick={(e) => handleClick(e, num)}
                        className='border border-red-600 flex items-center justify-center active:bg-green-400'>
                        {num.id}
                    </div>
                ))}

            </main>
            <div>count:{count}</div>
            <p>{win}</p>
        </div>

    )
}