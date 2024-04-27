
/*
props = {
  title: "",
  content: "",
  price: "",
  img: ""
}
props = {
  bread: {} -> bread가 들어갈거야.
}
*/
function BreadDetail(props) {
  const showButton = props.showButton;
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <img width="80%" src={props.bread.img} />
          </div>
          <div className="col-md-6">
            <h4>{props.bread.title}</h4>
            <p>{props.bread.content}</p>
            <p>{props.bread.price}</p>
            {showButton && <button className="btn btn-danger">주문하기</button>}
          </div>
        </div>



        
      </>
    );
 }


export default BreadDetail;