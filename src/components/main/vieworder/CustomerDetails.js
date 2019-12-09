import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Icon from '@material-ui/core/Icon'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import Table from '../../helpers/Table'

const CustomerDetails = props => {
	const classes = useStyles()
	const list = [
		{ title: 'idli', rate: 5 },
		{ title: 'dosa', rate: 20 },
		{ title: 'pongal', rate: 50 },
		{ title: 'vada', rate: 4 }
	]

	const [money, setmoney] = useState({
		amt: 0,
		adv: 0,
		tot: 0
	})

	const [session, setsession] = React.useState('')
	const handleChange = event => {
		setsession(event.target.value)
	}

	const amthandler = val => {
		setmoney({ ...money, amt: val, tot: val - money.adv })
	}

	const onchandler = e => {
		setmoney({ ...money, adv: e.target.value, tot: money.amt - e.target.value })
	}
	return (
		<div style={{ padding: 12 }}>
			<Grid container spacing={3} style={{ padding: 20 }}>
				<Grid item xs={12}>
					<Grid item xs={4} className={classes.amt}>
						<Typography style={{ color: '#00c853' }}>
							<h3 style={{ marginBottom: 0 }}>
								Customer details: {props.match.params.id}{' '}
							</h3>
						</Typography>
					</Grid>
					<Grid container xs={12}>
						<Grid item xs={6}>
							<TextField
								id='standard-required'
								label='invoice number'
								className={classes.textField}
								margin='none'
							/>
							<TextField
								id='standard-required'
								label='Name'
								className={classes.textField}
								margin='none'
							/>
							<TextField
								id='standard-required'
								label='phone'
								className={classes.textField}
								margin='normal'
							/>
						</Grid>
						<Grid item xs={6}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant='inline'
									format='MM/dd/yyyy'
									margin='normal'
									id='date-picker-inline'
									label='Date'
									KeyboardButtonProps={{
										'aria-label': 'change date'
									}}
									style={{ margin: 0 }}
								/>
							</MuiPickersUtilsProvider>

							<FormControl className={classes.formControl}>
								<InputLabel id='demo-simple-select-label'>Session</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={session}
									onChange={handleChange}
								>
									<MenuItem value={'FN'}>FN</MenuItem>
									<MenuItem value={'AN'}>AN</MenuItem>
								</Select>
							</FormControl>

							<p></p>
							<TextareaAutosize
								aria-label='minimum height'
								rows={5}
								cols={70}
								placeholder='Address'
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid
						item
						xs={4}
						className={classes.amt}
						style={{ marginBottom: 20 }}
					>
						<Typography style={{ color: '#00c853' }}>
							<h3 style={{ marginBottom: 0 }}>Amount details </h3>{' '}
						</Typography>
					</Grid>
					<Grid container xs={12} style={{ justifyContent: 'center' }}>
						<Table list={list} seth={amthandler} />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid item xs={4} className={classes.amt}>
						<Typography style={{ color: '#00c853' }}>
							<h3 style={{ marginBottom: 0 }}>Amount details </h3>{' '}
						</Typography>
					</Grid>
					<Grid container xs={12} className={classes.amt}>
						<Grid item xs={4} className={classes.amt}>
							<h3 style={{ marginBottom: 0 }}>Amount: {money.amt}</h3>
						</Grid>
						<Grid item xs={4} className={classes.amt}>
							<TextField
								id='standard-required'
								label='advance'
								value={money.adv}
								onChange={onchandler}
								className={classes.ctextField}
								margin='none'
							/>
						</Grid>
						<Grid item xs={4} className={classes.amt}>
							<h3 style={{ marginBottom: 0 }}>Total: {money.tot}</h3>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 15 }}>
					<Fab
						variant='extended'
						aria-label='like'
						className={classes.fab}
						style={{ backgroundColor: '#00c853' }}
					>
						<Icon
							color='error'
							style={{ fontSize: 30, color: '#fff', marginRight: 8 }}
						>
							print
						</Icon>
						<Typography style={{ color: '#fff' }}>
							print invoice and and save
						</Typography>
					</Fab>
					<Fab
						variant='extended'
						aria-label='like'
						className={classes.fab}
						style={{ backgroundColor: '#00c853' }}
					>
						<Icon
							color='error'
							style={{ fontSize: 30, color: '#fff', marginRight: 8 }}
						>
							shopping_cart
						</Icon>
						<Typography style={{ color: '#fff' }}>
							place order and save
						</Typography>
					</Fab>
				</Grid>
			</Grid>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	ctextField: {
		marginLeft: theme.spacing(1),
		marginRight: 150,
		width: 200
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginTop: 0
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	},
	fab: {
		margin: theme.spacing(1)
	},
	extendedIcon: {
		marginRight: theme.spacing(1)
	}
}))

export default CustomerDetails
