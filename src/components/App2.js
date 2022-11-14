import React from 'react'
import MenuItem from "./MenuItem"
import data from "../data"

const App2 = () => {
    let [tab, setTab] = React.useState([1, 0, 0])


    let sushiList = data.sushi.map(obj => {
        return (
            <MenuItem {...obj}/>
        )
    })

    let dumplingList = data.dumplings.map(obj => {
        return(
            <MenuItem {...obj}/>
        )
    })

    let dessertList = data.desserts.map(obj => {
        return(
            <MenuItem {...obj}/>
        )
    })

    function tabHandle(n){
        setTab(prev => {
            let arr = prev;
            for(let i=0; i<arr.length; i++){
                if(i==n) arr[i] = 1;
                else arr[i] = 0;
            }
            // console.log(arr)
            return arr
        })
        console.log(tab)
    }

    // React.useEffect(() => {

    // })


    return (
        <div>
            <section className="our-menu" id="menu-section">
                <h2>Our Menu</h2>
                <h1>Our Selection of dishes with quality taste</h1>

                <div className='menu-tabs'>
                    <p className={`${tab[0]===1?"active":""}`} onClick={() => tabHandle(0)}>Sushi {tab[0]}</p>
                    <p className={`${tab[1]===1?"active":""}`} onClick={() => tabHandle(1)}>Dumplings {tab[1]}</p>
                    <p className={`${tab[2]===1?"active":""}`} onClick={() => tabHandle(2)}>Desserts {tab[2]}</p>
                </div>

                <div className='menu-slides'>
                    {tab[0]===1 && sushiList}
                    {tab[1]===1 && dumplingList}
                    {tab[2]===1 && dessertList}
                </div>

            </section>
        </div>
    )
}

export default App2