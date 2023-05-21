import { Component } from "react";

export class Guna extends Component {
 render() {
 return <div>
 <h2>hi this is dilli</h2>
 <h1>parson details form parent: : {this.props.dilli}</h1>
<p>parson details form parent: </p>
<ul>
 <li>{this.props.dilli1.fname}</li>
 <li>{this.props.dilli1.lname}</li>
</ul>
<h2>Subject details for parent :</h2>
<ul>
{this.props.dilli2.map((dilli2) => {
return <li>{dilli2}</li>
}
)}
</ul>
</div>
}
}