import React from 'react';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                FullName:"Itidel Kouki",
                Bio: "This is my biographie : I'm a textile engineer , experienced in quality industries ",
                Profession:"Quality Manager",
                Imag :"/photo1.jpg",
                intervall: null,
                timer: 0,
               
                   };
        }

        componentDidMount() {
            console.log('3. componentDidMount()');
            this.setState({
              intervall: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
              }, 1000),
            });
          }
        
            render() {
                
return (
<div>
    <h1 style={{color:'purple'}}>{this.state.FullName}</h1>
    <p>{this.state.Bio}</p>
    <h4> {this.state.Profession} </h4>
    <img style={{border: "solid 5px yellow", borderRadius:"50%" , height: "200px", width:"250"}} src={this.state.Imag} alt="myimage"/>
    <h2>{this.state.timer}</h2>
</div>
 );
}
}

export default Profile;