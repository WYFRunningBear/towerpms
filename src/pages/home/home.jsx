import React,{Component} from 'react'
import '@/pages/home/home.less'



class home extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
      }
    
	render(){
		return (
			<div className="home">
				<div className="list">
					list
					<p>主页</p>
				</div>
				
			</div>
		  );
	}

}

export default home