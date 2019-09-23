import React from 'react';
import CardList from '../components/CardList'; 
import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class App extends React.Component{

    constructor(){
        super()
        this.state={
            robots:[],
            searchfield: ''
        }
    }
    //when the input change in searchbox the searchfield will change
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        
       
        
    }
    //透過fetch取得api的資料
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data=>{
            return data.json(); 
           
        })
        .then(users=>{
            this.setState({robots:users})
        })
        
    }
    render(){
        
        const filteredRobots = this.state.robots.filter(robot=>{
            
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
   
        })
       
        if (!this.state.robots.length){
            return <h1>Loading</h1>
        }
        else{
        return (
            <div className='tc'>
                <h1>RoboFriend</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
            
        );
        }
    }
    
}

export default App