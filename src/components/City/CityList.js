import React,{Component} from "react"
import City from './City'
import './City.css'
class CityList extends Component{
    state= {
        cities:[{
            name:"San Francisco",
            photo:"https://wallpapercave.com/wp/GnfZaGd.jpg"
        },{
            name:"New York",
            photo:"https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }]
    }
    render(){
        return(
            <div className="city-list">
                {this.state.cities.map(city => {
                return <City displayPosts={this.props.displayPosts}city={city}/>   
                })}
            </div>
        )
    }
}


export default CityList