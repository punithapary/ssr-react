import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as types from "./actions/types";
// import parse from 'html-react-parser'
class Aboutus extends Component {

  //Rendering about us content
  componentDidMount = () =>{
    const { dispatch} = this.props;
    dispatch({type: types.FEEDBACKS});
  } 
  render() {
    return (
      <div className="contactpage">     
        <div className="leftside">
        </div>
        <div className="page-content"> Static Content
         {(this.props.feedbacks.response || []).map(page => ( 
            <div className="heading" key={page.id}>
               <h2>{page.Name}</h2>  
            <div className="description" >{page.Description }</div> 
            </div>
           ))} 
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>(
    {feedbacks: state.feedbacks});
export default connect(mapStateToProps)(Aboutus);
