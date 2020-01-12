import React, { useRef, Component } from 'react'
import ReactToPrint from 'react-to-print'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein }
}

class ComponentToPrint extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rows: [
				createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
				createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
				createData('Eclair', 262, 16.0, 24, 6.0),
				createData('Cupcake', 305, 3.7, 67, 4.3),
				createData('Gingerbread', 356, 16.0, 49, 3.9),
			],
		}
	}

	render() {
		return (
			<div>
				{this.props.data.name}
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper style={{ display: 'flex', flexDirection: 'row' }}>
							<Grid
								item
								xs={6}
								style={{ textAlign: 'right', marginRight: '20px' }}
							>
								IMAGE
							</Grid>
							<Grid item xs={6} style={{ textAlign: 'left' }}>
								TAJ CATERING
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align='right'>Calories</TableCell>
											<TableCell align='right'>Fat&nbsp;(g)</TableCell>
											<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
											<TableCell align='right'>Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{this.state.rows.map(row => (
											<TableRow key={row.name}>
												<TableCell component='th' scope='row'>
													{row.name}
												</TableCell>
												<TableCell align='right'>{row.calories}</TableCell>
												<TableCell align='right'>{row.fat}</TableCell>
												<TableCell align='right'>{row.carbs}</TableCell>
												<TableCell align='right'>{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
				</Grid>
        <Grid item xs={12}>
						<Paper>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align='right'>Calories</TableCell>
											<TableCell align='right'>Fat&nbsp;(g)</TableCell>
											<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
											<TableCell align='right'>Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{this.state.rows.map(row => (
											<TableRow key={row.name}>
												<TableCell component='th' scope='row'>
													{row.name}
												</TableCell>
												<TableCell align='right'>{row.calories}</TableCell>
												<TableCell align='right'>{row.fat}</TableCell>
												<TableCell align='right'>{row.carbs}</TableCell>
												<TableCell align='right'>{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
          <Grid item xs={12}>
						<Paper>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align='right'>Calories</TableCell>
											<TableCell align='right'>Fat&nbsp;(g)</TableCell>
											<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
											<TableCell align='right'>Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{this.state.rows.map(row => (
											<TableRow key={row.name}>
												<TableCell component='th' scope='row'>
													{row.name}
												</TableCell>
												<TableCell align='right'>{row.calories}</TableCell>
												<TableCell align='right'>{row.fat}</TableCell>
												<TableCell align='right'>{row.carbs}</TableCell>
												<TableCell align='right'>{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
          <Grid item xs={12}>
						<Paper>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align='right'>Calories</TableCell>
											<TableCell align='right'>Fat&nbsp;(g)</TableCell>
											<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
											<TableCell align='right'>Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{this.state.rows.map(row => (
											<TableRow key={row.name}>
												<TableCell component='th' scope='row'>
													{row.name}
												</TableCell>
												<TableCell align='right'>{row.calories}</TableCell>
												<TableCell align='right'>{row.fat}</TableCell>
												<TableCell align='right'>{row.carbs}</TableCell>
												<TableCell align='right'>{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
				
			</div>
		)
	}
}

const Print = props => {
	const componentRef = useRef()
	return (
		<div>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => componentRef.current}
			/>
			<ComponentToPrint ref={componentRef} data={props.location.state} />
		</div>
	)
}

export default Print
