import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux'
import  { selectUserAction } from '../actions/selectUserAction'
import { changeNumberListAction } from '../actions/changeNumberListAction'
import { changeListAction } from '../actions/changeListAction'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Exercices from '../components/Exercices/Exercices'
import Form from '../components/Form/Form'

class App extends Component {
	render() {
		console.log('App',this.props)
		return (
			<Fragment>
				<Header/>
				<Exercices 
					user={this.props.user}
					selectUserDispatch={this.props.selectUserDispatch}
					changeNumberListDispatch={this.props.changeNumberListDispatch}
					listNumber={this.props.listNumber}
					list={this.props.list}
					changeListDispatch={this.props.changeListDispatch}/>
					<Form />
				<Footer />
			</Fragment>
			)
	}
}

const mapStateToProps = store => {
	return {
		user: store.user,
		listNumber: store.listNumber,
		list: store.list,
	}
}

const mapDispatchToProps = dispatch => ({
	selectUserDispatch(user) {
		const selectAction = selectUserAction(user);
		dispatch(selectAction)
	},
	changeNumberListDispatch(num) {
		const changeNumberList = changeNumberListAction(num);
		dispatch(changeNumberList)
	},
	changeListDispatch(obj) {
		const changeList = changeListAction(obj);
		dispatch(changeList)
	}

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
