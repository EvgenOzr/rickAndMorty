import React, { Component, useState, useEffect} from 'react';
import './item-details.css';
import RiMService from '../../services/rickAndMorty-service';
import Spinner from '../spinner';


const Record = ({item, field, label}) => {
	return(
    	<li className="list-group-item">
      		<span className="term">{label}</span>
      		<span>{item[field]}</span>
    	</li>
  	)
}

const RecordCharacter = ({item, field, label}) => {
	let icon;
	if (item[field] === 'Alive') {
		icon = <i className="fa-solid fa-heart"></i>;
	}else if(item[field] === 'Dead'){
		icon = <i className="fa-solid fa-skull-crossbones"></i>;
	}else{
		icon = <i className="fa-solid fa-question"></i>;
	}
	return(
    	<li className="list-group-item">
      		<span className="term">{label} {icon}</span>
      		<span>{item[field]}</span>
    	</li>
  	)
}

const RecordPerson = ({item, field, label}) => {
	const [counter, setCounter] = useState(0)
	const [names, setNames] = useState([])
	const rimService = new RiMService();
	// let newNames = [];

	// const addName = (newName) => {
	// 	setNames([...names, newName.name])
	// }
	const loadNames = () => {
		// let newNames = []
		item[field].forEach((n) => {
			rimService
				.getCharacter(n.replace(/\D/gi, ''))
				.then((res) => {
					setNames((names) => [...names, res.name])
					// newNames.push(res.name)
					// setCounter((c) => c + 1)
				})

		})
		// setNames(newNames)
	}
	useEffect(() => {
		loadNames();
	}, [])

	return(
		<li className="list-group-item">
			<span className="term">{label}</span>
			{/* <span>{name}</span> */}
			{names.map((item, idx) => (
				<div key = {idx}>
					<span >{item}</span>
					{/* <span>{counter}</span> */}
				</div>
			))}
		</li>
	)
}

export {
	Record,
	RecordPerson,
	RecordCharacter
}

export default class ItemDetails extends Component {

	state = {
		item: null,
		image:null,
		loading: false
	}

	componentDidMount(){
		this.updateItem();
	}

	componentDidUpdate(prevProps){
		if(this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData ||
			this.props.getImageUrl !== prevProps.getImageUrl
			)
		{
			this.setState({loading: true})
			this.updateItem();
		} 
	}

	updateItem() {
    
    const {itemId, getData, getImageUrl} = this.props;

    if(!itemId) {
		return
    }
    getData(itemId)
		.then((item) => {
        this.setState({item, image: getImageUrl(item), loading: false})
      })
  }

	render() {

    const {item, image, loading} = this.state;

    if(!item && !loading) {
		return <span className='nothing'>Select a item from a list</span>
    }
    if(loading) return <Spinner/>
    const {name} = item;

    // const content = loading ? <Spinner/> : <ItemView item={item} imageUrl={image} />

    return (
	<div className="person-details card">
		<img className="person-image"
		src={image}
		alt='item'/>
		<div className="card-body">
			<h4>{name}</h4>
			<ul className="list-group list-group-flush">
				{
				React.Children.map(this.props.children, (child) => {
				return React.cloneElement(child, {item});
				})
				}
			</ul>
		</div>
	</div>
    )
  }
}
