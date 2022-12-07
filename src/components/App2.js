import React from 'react'
import MenuItem from "./MenuItem"
import data from "../data"

export default function App2() {
    let [tab, setTab] = React.useState([1, 0, 0])

    let [cart1, setCart1] = React.useState(data.sushi.map(() => 0))
    let [cart2, setCart2] = React.useState(data.dumplings.map(() => 0))
    let [cart3, setCart3] = React.useState(data.desserts.map(() => 0))

    function handleCart1(id, n) {
        setCart1(cart1.map((c, i) => {
            if (i === id - 1) return c + n
            else return c
        }))
        console.log(cart1)
    }

    function handleCart2(id, n) {
        setCart2(cart2.map((c, i) => {
            if (i === id - 1) return c + n
            else return c
        }))
        console.log(cart2)
    }

    function handleCart3(id, n) {
        setCart3(cart3.map((c, i) => {
            if (i === id - 1) return c + n
            else return c
        }))
        console.log(cart3)
    }

    let sushiList = data.sushi.map((obj, i) => {
        return (
            <MenuItem {...obj} handleCart={handleCart1} count={cart1[i]} />
        )
    })

    let dumplingList = data.dumplings.map((obj, i) => {
        return (
            <MenuItem {...obj} handleCart={handleCart2} count={cart2[i]} />
        )
    })

    let dessertList = data.desserts.map((obj, i) => {
        return (
            <MenuItem {...obj} handleCart={handleCart3} count={cart3[i]} />
        )
    })

    function tabHandle(n) {
        setTab(prev => prev.map((c, i) => {
            if (i === n) return 1
            else return 0
        }))
    }

    return (
        <div>
            <section className="our-menu" id="menu-section">
                <h2>Our Menu</h2>
                <h1>Our Selection of dishes with quality taste</h1>

                <div className='menu-tabs'>
                    <p className={`${tab[0] === 1 ? "active" : ""}`} onClick={() => tabHandle(0)}>Sushi</p>
                    <p className={`${tab[1] === 1 ? "active" : ""}`} onClick={() => tabHandle(1)}>Dumplings</p>
                    <p className={`${tab[2] === 1 ? "active" : ""}`} onClick={() => tabHandle(2)}>Desserts</p>
                </div>

                <div className='menu-slides'>
                    {tab[0] === 1 && sushiList}
                    {tab[1] === 1 && dumplingList}
                    {tab[2] === 1 && dessertList}
                </div>

            </section>
        </div>
    )
}

// export default App2