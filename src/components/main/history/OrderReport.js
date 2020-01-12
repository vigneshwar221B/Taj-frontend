import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import Print from '@material-ui/icons/Print'
import Paid from '@material-ui/icons/AttachMoney'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import Axios from 'axios'

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
}))

const OrderReport = () => {
	const classes = useStyles()

	const [selectedDate, setSelectedDate] = React.useState(new Date('2019-11-01'))
	const handleDateChange = date => {
		Axios.get('http://127.0.0.1:8000/hotel/order/')
			.then(res => {
				let newdata = res.data.filter(el => {
					let chosenDate =
						date.getFullYear() + '-' + date.getFullYear() + '-' + date.getDate()

					let recievedDate =
						new Date(el.date_placed).getFullYear() +
						'-' +
						new Date(el.date_placed).getFullYear() +
						'-' +
						new Date(el.date_placed).getDate()

					console.log(chosenDate)
					console.log(recievedDate)

					return chosenDate == recievedDate
				})

				if (newdata.length !== 0) {
					let customers = newdata.map((el, i) => ({
						sno: i + 1,
						name: el.name,
						invoice: el.invoice_no,
						session: el.session,
						phoneno: el.phone_num,
						placed_date: el.date_placed,
						delivery_date: el.date_of_delivery,
						amount: el.paid ? 'paid' : 'not paid',
						vessel: el.returned_vessel ? 'returned' : 'not returned',
					}))
					setOrderState(state => ({
						...state,
						data: customers,
					}))
				} else {
					setOrderState(state => ({
						...state,
						data: [],
					}))
				}
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		const getData = async () => {
			let res = await Axios.get('http://127.0.0.1:8000/hotel/order/')
			console.log(res.data)
			console.log('mounted')

			const data = res.data.map((el, i) => ({
				sno: i + 1,
				name: el.name,
				invoice: el.invoice_no,
				session: el.session,
				phoneno: el.phone_num,
				placed_date: el.date_placed,
				delivery_date: el.date_of_delivery,
				amount: el.paid ? 'paid' : 'not paid',
				vessel: el.returned_vessel ? 'returned' : 'not returned',
			}))

			setOrderState(state => ({
				...state,
				data,
			}))
		}
		getData()
	}, [])

	const [orderState, setOrderState] = React.useState({
		columns: [
			{ title: 'S.No', field: 'sno' },
			{ title: 'Invoice No', field: 'invoice' },
			{ title: 'Name', field: 'name' },
			{ title: 'Session', field: 'session' },
			{
				title: 'Ph. no',
				field: 'phoneno',
			},
			{
				title: 'vessel',
				field: 'vessel',
			},
			{ title: 'placed date', field: 'placed_date' },
			{
				title: 'delivery date',
				field: 'delivery_date',
			},
			{ title: 'Amount', field: 'amount' },
		],
		data: [],
	})
	return (
		<div>
			<div className='row' style={{ margin: 'auto', marginBottom: '2rem' }}>
				<Grid container spacing={3}>
					<Grid item xs={6} sm={3}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								disableToolbar
								variant='inline'
								format='MM/dd/yyyy'
								margin='normal'
								id='date-picker-inline'
								label='Date picker inline'
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid item xs={6} sm={3}></Grid>
					<Grid item xs={6} sm={3}>
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
				columns={orderState.columns}
				data={orderState.data}
			/>
		</div>
	)
}

export default OrderReport
