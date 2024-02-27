// ContactForm.tsx
import { Typography, Grid, TextField, Button, Box } from '@mui/material';
import { FormControl } from '@mui/base/FormControl';

function ContactForm() {
	const handleSubmit: React.FormEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault(); // Prevent default form submission behavior
		// Your form submission logic here
		console.log('Form submitted!');
	};

	return (
		<Box sx={{ maxWidth: '80%' }}>
			<Typography variant='h5' gutterBottom sx={{ pt: 60, pb: 1 }}>
				Contact
			</Typography>
			<FormControl>
				<Box component='form' onSubmit={handleSubmit}>
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
							<Button
								variant='contained'
								color='primary'
								fullWidth
								type='submit'>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</Box>
			</FormControl>
		</Box>
	);
}

export default ContactForm;
