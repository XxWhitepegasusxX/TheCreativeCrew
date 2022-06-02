import Card from "../Card/Card";

export default function Gallery(){
    return(
        <div className="container">
            <div className="card"><Card name="Bill Mahoney " role="Product owner" image="images/photo1.png"/></div>
            <div className="card par"><Card middle name="Saba Cabrera " role="Art director" image="images/photo2.png"/></div>
            <div className="card "><Card name="Shae Le" role="Tech Lead" image="images/photo3.png"/></div>
            <div className="card par"><Card name="Skylah Lu" role="UX Design" image="images/photo4.png"/></div>
            <div className="card"><Card middle name="Griff Richards" role="Developer" image="images/photo5.png"/></div>
            <div className="card par"><Card name="Stan John" role="Developer" image="images/photo6.png"/></div>
        </div>
    )
}