import React, {  Component } from "react";
import CandidateNames from "./candidateNames";


class CandidateContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidateNames : ["sneha","vibhuti","ruchi" , "anjali"]
        };
    }
    render (){
        return <CandidateNames candidateNames={this.state.candidateNames} />
        }
}
export default CandidateContainer ;