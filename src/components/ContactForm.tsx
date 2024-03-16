import { useState } from 'react';
import { Typography, Grid, TextField, Button, Box } from '@mui/material';
import { FormControl } from '@mui/base/FormControl';
import { useForm } from '@formspree/react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function ContactForm() {
	const [state, handleSubmit] = useForm('https://formspree.io/f/mjvnoaqn');
	const [open, setOpen] = useState(false);

	const handleClose = (
		_event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent default form submission behavior
		await handleSubmit(e); // Submit the form using useForm hook
		setOpen(true);
	};

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			ml={'auto'}
			mr={'auto'}
			sx={{ maxWidth: '80%', pt: 4, pb: 4 }}>
			<Typography
				variant='h4'
				color={'white'}
				gutterBottom
				sx={{ pt: 10, pb: 1 }}>
				Contact
			</Typography>
			<FormControl>
				<Box component='form' onSubmit={handleFormSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='name'
								label='Name'
								name='name'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email'
								name='email'
								type='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='message'
								label='Message'
								name='message'
								multiline
								rows={6}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button variant='outlined' color='primary' type='submit'>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</Box>
			</FormControl>
			<Snackbar
				open={open}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
				{state.succeeded ? (
					<Alert onClose={handleClose} severity='success'>
						Form submitted successfully
					</Alert>
				) : (
					<Alert onClose={handleClose} severity='error'>
						Failed to submit form, please try again
					</Alert>
				)}
			</Snackbar>
		</Box>
	);
}

export default ContactForm;
