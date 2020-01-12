import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import Print from '@material-ui/icons/Print'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import Moment from 'moment'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	input: {
		display: 'none',
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	gridDropdown: {
		paddingLeft: theme.spacing(5),
	},
	tableSpacing: {
		padding: theme.spacing(5),
		margin: theme.spacing(3),
		boxShadow: 0,
		zIndex: 0,
	},
}))

const Customers = props => {
	const [allData, setAllData] = React.useState([])
	let history = useHistory()
	const classes = useStyles()

	const [session, setsession] = React.useState('All')
	const handleChange = event => {
		switch(event.target.value){
			case 'All':
				console.log(allData)
				setViewOrderState(state => ({
					...state,
					data: allData['allData'],
				}))
				
				console.log('all')
				console.log(allData)
				break;
			case 'Morning':
				console.log(allData)
				setViewOrderState((state) => ({
					...state,
					data: allData['allData'].filter(d => d.session == 'FN')
				}))
				console.log('morning')
				console.log(allData)
				break;
			case 'Afternoon':
				console.log(allData)
				setViewOrderState((state) => ({
					...state,
					data: allData['allData'].filter(d => d.session == 'Afternoon')
				}))
				console.log('afternoon')
				console.log(allData)
				break;
			case 'Evening':
				console.log(allData)
				setViewOrderState((state) => ({
					...state,
					data: allData['allData'].filter(d => d.session == 'Evening')
				}))
				console.log('evening')
				console.log(allData)
				break;
			default:
				console.log('default')
				break;
		}
		setsession(event.target.value)
		console.log()
	}
	const [selectedDate, setSelectedDate] = React.useState(
		new Date()
	)
	const handleDateChange = date => {
		console.log(Moment(date).format('YYYY-MM-DD'))
		let updatedDate = Moment(date).format('YYYY-MM-DD')
		Axios.get('http://127.0.0.1:8000/hotel/order/').then(res => {
			const changedData = res.data.filter(d => d.date_of_delivery.slice(0, 10) === updatedDate).map((el, i) => ({
				sno: i + 1,
				invoice: el.invoice_no,
				name: el.name,
				phoneno: el.phone_num,
				date: el.date_of_delivery,
				session: el.session
			}))
			let subres = res.data[0]
			console.log(changedData)
			// console.log(updatedDate == subres['date_of_delivery'].slice(0,10))
			// console.log(res)
			setAllData(state => ({
				...state,
				allData: changedData,
			}))
			setViewOrderState(state => ({
				...state,
				data: changedData,
			}))
		})
		setSelectedDate(date)
		setsession('All')
	}
	const [viewOrderState, setViewOrderState] = React.useState({
		columns: [
			{ title: 'S.No', field: 'sno' },
			{ title: 'Invoice No', field: 'invoice' },
			{ title: 'Name', field: 'name' },
			{ title: 'Session', field: 'session' },
			{
				title: 'Ph. no',
				field: 'phoneno',
			},
			{ title: 'Date', field: 'date' },
		],
		data: [
			// {
			// 	sno: '1',
			// 	name: 'Murphy',
			// 	invoice: 'dvfdfv',
			// 	session: 'Morning',
			// 	phoneno: '9786676777',
			// 	date: '14/12/19',
			// },
			// {
			// 	sno: '2',
			// 	name: 'Var',
			// 	invoice: 'dasdafv',
			// 	session: 'Afternoon',
			// 	phoneno: '97866343777',
			// 	date: '14/12/19',
			// },
		],
	})

	useEffect(() => {
		
		const getData = async () => {
			console.log(allData)
			const today = Moment(Date()).format('YYYY-MM-DD')
			let res = await Axios.get('http://127.0.0.1:8000/hotel/order/')
			let subres = res.data[0]
			// console.log(today)
			// console.log(subres['date_of_delivery'].slice(0,10))
			// console.log(subres['date_of_delivery'].slice(0,10) == today)
			// console.log(res.data.filter(d => d.date_of_delivery.slice(0,10) === '2019-12-05'))

			// const a = res.data.filter(aa => aa.date_of_delivery.slice(0,10) != 0)
			// console.log(a)

			const data = res.data.filter(d => d.date_of_delivery.slice(0,10) === today).map((el, i) => ({
				sno: i + 1,
				invoice: el.invoice_no,
				name: el.name,
				phoneno: el.phone_num,
				date: el.date_of_delivery,
				session: el.session
			}))

			console.log("allData")
			
			setAllData((state) => ({
				...state,
				allData: data,
			}))
			console.log(allData)
			setViewOrderState(state => ({
				...state,
				data,
			}))
		}
		getData()
	}, [])
	return (
		<div style={{ boxShadow: 'none', color: 'none' }}>
			<div className='row' style={{ margin: 'auto', marginBottom: '2rem' }}>
				<Grid container spacing={3} className={classes.gridDropdown}>
					<Grid item xs={8} sm={4}>
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'
							>
								Session
							</InputLabel>
							<Select
								className={classes.selectEmpty}
								value={session}
								label='Session'
								name='Session'
								onChange={handleChange}
								inputProps={{ 'aria-label': 'Session' }}
							>
								<MenuItem value={'All'}>All</MenuItem>
								<MenuItem value={'Morning'}>Morning</MenuItem>
								<MenuItem value={'Afternoon'}>Afternoon</MenuItem>
								<MenuItem value={'Evening'}>Evening</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={8} sm={4}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								disableToolbar
								variant='inline'
								format='MM/dd/yyyy'
								margin='normal'
								id='date-picker-inline'
								label='Date'
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid item xs={8} sm={4}>
						<Button
							style={{ marginLeft: '50%', marginTop: '8%' }}
							variant='contained'
							color='default'
							size='large'
							className={classes.button}
							startIcon={<Print />}
						>
							Print
						</Button>
					</Grid>
				</Grid>
			</div>

			<MaterialTable
				title=''
				actions={[
					{
						icon: 'person',
						tooltip: 'view profile',
						onClick: (event, rowData) => {
							console.log(rowData)
							history.push(`/customer/${rowData.name}`)
						},
					},
				]}
				columns={viewOrderState.columns}
				data={viewOrderState.data}
				className={classes.tableSpacing}
				style={{ boxShadow: 'none', padding: '10' }}
			/>
		</div>
	)
}

export default Customers
