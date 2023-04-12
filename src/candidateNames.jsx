import React  from "react";

const CandidateNames = (props) => {
 return ( <ul>

{
    props.candidateNames.map((candidateName) => {
        return<li>{candidateName}</li>;
        
    })
}
 </ul>
)
 }

export default CandidateNames ;