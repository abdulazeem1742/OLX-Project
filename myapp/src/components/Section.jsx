import React from 'react'
import './Section.css'
import Card from './Card'
class Section extends React.Component{
    render(){
        return(
            <>
                <div className="container1">
                    <h3>Fresh recommendations</h3>
                    <div className="cards1">
                        <Card price="1050000-easy on instalment" discription="Toyota Haice" imgUrl="https://apollo-singapore.akamaized.net/v1/files/en329jsox8g42-PK/image;s=272x0"/>
                        <Card price="35000" discription="Brown Sofa" imgUrl="https://apollo-singapore.akamaized.net/v1/files/3e5qqipxtv4o2-PK/image;s=272x0"/>
                        <Card price="23000" discription="Table & Chair" imgUrl="https://apollo-singapore.akamaized.net/v1/files/xtyu57be82a33-PK/image;s=272x0"/>
                        <Card price="22000" discription="Chinyoti Divan Marvellous Sette Deew" imgUrl="https://apollo-singapore.akamaized.net/v1/files/75vsdxb8ppce1-PK/image;s=272x0"/>
                        <Card price="499" discription="Water Proof Cover" imgUrl="https://apollo-singapore.akamaized.net/v1/files/n2hybrw5kpmo-PK/image;s=272x0"/>
                        <Card price="700" discription="HAPPY WINTER SEASON NEW FABRIC" imgUrl="https://apollo-singapore.akamaized.net/v1/files/x3xdiy599hes3-PK/image;s=272x0"/>
                        <Card price="21000" discription="PEL fridge" imgUrl="https://apollo-singapore.akamaized.net/v1/files/l0xmorjg4d9e2-PK/image;s=272x0"/>
                        <Card price="145000" discription="iphone 11" imgUrl="https://apollo-singapore.akamaized.net/v1/files/vmk279s5knr5-PK/image;s=272x0"/>
                        <Card price="75000" discription="iphone 8plus" imgUrl="https://apollo-singapore.akamaized.net/v1/files/ycl5sakbpgoy2-PK/image;s=272x0"/>
                        </div>
                </div>
            </>
        )
    }
}

export default Section;