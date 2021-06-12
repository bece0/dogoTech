import React from 'react';
import {Carousel} from 'react-bootstrap';



const Dashboard = (props) => {

    const sepeteEkle = (urun) => {     /*Sepete ürün eklendiğinde alert görünür*/ 
        alert(urun.urunAdi + ' sepete eklendi.');   
      };

        return (
        
            <div>
                <div className="container">
                
                    {props.urunler.map((urun) => (  /* Gelen veriler görüntülenir */ 
                           <div className="card" key={urun.urunId}>               
                                <div className="row kategori"> 
                                    <div className="col-sm-12">                         
                                            <nav aria-label="breadcrumb">
                                                <ol class="breadcrumb">                                   
                                                    <li class="breadcrumb-item"><a href="#Anasayfa">Anasayfa</a></li>
                                                    <li class="breadcrumb-item"><a href="#Sneaker">{urun.urunKategori}</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page">{urun.urunAdi}</li>

                                                </ol>
                                            </nav>                              
                                        </div>
                                </div>   
                               
                                <div className="row urunDetay container">                             
                                    <div className="col-sm-6 urunGorselleri">
                                       
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img className="d-block w-100" src={urun.src[0]}/>                                
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img className="d-block w-100" src={urun.src[1]}/>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img className="d-block w-100" src={urun.src[2]}/>
                                                </Carousel.Item>
                                            
                                            </Carousel>            

                                    </div>
                                    <div className="col-sm-6 urunBilgileri">
                                        <div className="row urunUstBilgi justify-content-sm-between"> 
                                                <div className="urunAdi col-sm-9">                             
                                                    {urun.urunAdi} 
                                                </div>
                                                <div className="stokBilgisi col-sm-3">                             
                                                     Stokta {urun.stokDurumu} 
                                                </div>
                                        </div>
                                        <hr/>
                                        <div className="row urunFiyat">
                                            <div className="col-sm-9">
                                                <div className="row indirim  justify-content-sm-start">
        
                                                    <div className="yeniFiyat col-sm-4"> {(urun.urunFiyat)-(urun.urunFiyat * urun.indirimOrani /100 )}  TL</div> 
                                                    <div className="eskiFiyat col-sm-4"> {urun.urunFiyat} TL </div>
                                                </div>       
                                            </div>    
                                            <div className="indirimOrani col-sm-3"> % {urun.indirimOrani} İndirim  </div>
                                                
                                        </div>                                          
                                        <hr/>                  
                                        <div className="urunSepetİslemleri" >
                                            <div className=" bedenSecenekleri ">
                                                <div className="bedenBaslik"> Beden Seçenekleri : </div> 
                                                <div className="bedenler">
                                                        <div className="btn-group" role="group" aria-label="Beden">
                                                            <button type="button" class="btn btn-outline-secondary">{urun.urunBedenleri[0]}</button>
                                                            <button type="button" class="btn btn-outline-secondary">{urun.urunBedenleri[1]}</button>
                                                            <button type="button" class="btn btn-outline-secondary">{urun.urunBedenleri[2]}</button>
                                                            <button type="button" class="btn btn-outline-secondary">{urun.urunBedenleri[3]}</button>
                                                            <button type="button" class="btn btn-outline-secondary">{urun.urunBedenleri[4]}</button>
                                                            <button type="button" class="btn btn-outline-secondary">{urun.urunBedenleri[5]}</button>                                
                                                        </div>                                                      
                                                </div>     
                                            </div>                                      
                                            <div className=" sepetButon justify-content-sm-center ">                                                                                                        
                                                    <button type="button" class="btn btn-success btn-block " onClick={() => sepeteEkle(urun)}>Sepete Ekle</button>                                        
                                            </div>
                                        </div>                                       
                                        <hr/>                               
                                        <div className="urunAciklamasi justify-content-sm-between" >  
                                            <div className="row urunAciklamasiBaslik" > 
                                                Ürün Açıklaması : 
                                            </div>
                                            <div className="row urunAciklamasi" >
                                                <p>
                                                    {urun.urunAciklama}
                                                </p>
                                            </div>  
                                        </div> 
                                    </div>                      
                                </div>                   
                      
                            </div> 

                    ))}                       
                     
                </div>
           </div>
        )
   
    

}
export default Dashboard;