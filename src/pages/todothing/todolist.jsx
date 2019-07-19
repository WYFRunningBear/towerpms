import React,{Component} from 'react'
import '@/pages/todothing/todolist.less'
import  Headers from "@/components/header/header"

class todolist extends Component{
	render(){
		return (
			<div className="todolist">
				<Headers title="待办列表" />
				todolist
			</div>
		  );
	}

}

export default todolist