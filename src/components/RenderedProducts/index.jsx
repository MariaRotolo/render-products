

const RenderedProducts = (props) => {
     
    const data= props.data || {title: "product", price: "123", image: ""}

    return(

        <div >
            <div>
                <img src={data.image} alt={data.title}/>
            </div>
            <p>{data.title}</p>
            <p>{data.price}</p>
           
        </div>

        
    )
}

export {RenderedProducts }

