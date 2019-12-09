import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Print from '@material-ui/icons/Print'

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	button: {
		margin: theme.spacing(1)
	}
}))

const stylesy = {
	paper: {
		padding: 10
	}
}

const CustomerAndItems = () => {
	const classes = useStyles()
	const [session, setsession] = React.useState('All')
	const handleChange = event => {
		setsession(event.target.value)
	}
	const [selectedDate, setSelectedDate] = React.useState(
		new Date('2019-11-01T21:11:54')
	)
	const handleDateChange = date => {
		setSelectedDate(date)
	}

	const data = [
		{
			customerName: 'Vishnu',
			items: [
				{
					name: 'Chappathi',
					quantity: 3
				},
				{
					name: 'Dosa',
					quantity: 4
				},
				{
					name: 'Idly',
					quantity: 10
				}
			]
		},

		{
			customerName: 'War',
			items: [
				{
					name: 'Chappathi',
					quantity: 10
				},
				{
					name: 'Dosa',
					quantity: 10
				},
				{
					name: 'Idly',
					quantity: 10
				}
			]
		}
	]
	return (
		<>
			<Grid container spacing={3}>
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
									'aria-label': 'change date'
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

				{data.map((item, i) => {
					return (
						<Grid item xs={8} sm={4}>
							<Paper style={stylesy.paper}>
								<h3 style={{ fontFamily: 'Lato' }}> {item.customerName}</h3>
								<br></br>
								{item.items.map((item, i) => {
									return (
										<Container>{item.name + '-' + item.quantity}</Container>
									)
								})}
							</Paper>
						</Grid>
					)
				})}
			</Grid>
		</>
	)
}

export default CustomerAndItems
