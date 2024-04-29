import img05 from '../img/bread05.jpg';


function Detail(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img05} width="80%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.breads[0].title}</h4>
            <p>{props.breads[0].content}</p>
            <p>{props.breads[0].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
}

export default Detail;